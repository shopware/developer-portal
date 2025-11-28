<template>
    <div class="SwagDocFeedback" v-if="!hidden && shouldFetchFeedback">
        <span class="SwagDocFeedback_heading">Was this page helpful?</span>

        <div class="SwagDocFeedback_starsWrapper">
            <div class="SwagDocFeedback_stars" @mouseleave="onLeave">
                <span v-for="star in stars" class="SwagDocFeedback_starWrapper">
                    <SwagIcon class="SwagDocFeedback_star" icon="star" :type="star.type"
                    @mouseenter="onHover(star)" @click="storeRating(star.rating)" />
                    <span v-if="star.rating === 1" class="SwagDocFeedback_starText">Unsatisfied</span>
                    <span v-if="star.rating === 5" class="SwagDocFeedback_starText">Satisfied</span>
                </span>
            </div>
        </div>

        <span v-if="!stats.current.votes && !stats.current.votes" class="font-semibold">Be the first to vote!</span>
        <span v-else-if="!stats.current.votes" class="font-semibold">Be the first to comment changes!</span>
        
        <div class="flex items-center gap-4">
            <SwagIcon icon="star" type="solid" class="text-2xl color-orange" />
            <span class="font-semibold">{{ stats.current.average.toFixed(1) }} / 5 &nbsp;({{ stats.current.votes }} vote{{ s(stats.current.votes) }})</span>
            <SwagIcon icon="chevron-circle-down" class="cursor-pointer" @click="showStats = !showStats" />
        </div>

        <div v-if="showStats">
            <div v-for="stat in finalStats" class="flex gap-2 items-center" style="font-variant-numeric: tabular-nums">
                {{ stat.rating }} &nbsp;
                <SwagIcon v-for="rating in [1, 2, 3, 4, 5]" icon="star" type="solid" :class="[stat.rating >= rating ? 'color-orange' : 'color-gray']" />
                &nbsp;({{ stat.votes }})
            </div>
        </div>

        <div class="flex flex-col items-center gap-2 text-sm">
            <span v-if="lastUpdated">Last updated: {{ lastUpdated }}</span>
            <div class="flex items-center gap-2" v-if="stats.previous.votes">
                <span>Previous versions:</span> 
                <SwagIcon icon="star" type="solid" class="text-xl color-orange" />
                <span>{{ stats.previous.average }} / 5 ({{ stats.previous.votes }} vote{{ s(stats.previous.votes) }})</span>
            </div>
        </div>

        <span v-if="error" class="text-red font-medium">{{ error }}</span>

        <div v-if="rated" class="c-flat-card flex flex-col gap-6 p-6 items-center max-w-[36rem]">
            <p v-if="feedbackId" class="font-medium">Your message has been saved. Thank you for your feedback!</p>
            <template v-else>
                <p class="font-medium">Your rating has been saved! <SwagIcon icon="party-horn" type="solid" class="inline-flex" /></p>
                <p>Would you like to tell us more about your experience with Shopware 6 Developer docs? Let us know in the box below.</p>
                <textarea class="form-control" name="message" placeholder="Tell us more" v-model="message"></textarea>
                <button type="button" class="btn --primary self-end" @click.prevent="storeFeedback" :disabled="!(message?.trim()?.length >= 2)">Send feedback</button>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, computed, type Ref } from 'vue'
import { useData, useRoute } from "vitepress";

interface Rating {
    rating: number,
    type: 'regular' | 'solid',
}
const stars: Ref<Rating[]> = ref([{rating: 1, type: 'regular'}, {rating: 2, type: 'regular'}, {rating: 3, type: 'regular'}, {rating: 4, type: 'regular'}, {rating: 5, type: 'regular'}])
const rerender = (rating: number | null) => {
    stars.value = stars.value.map((star) => {
        star.type = rating && (star.rating <= rating) ? 'solid' : 'regular'
        return star
    })
}
const onHover = (selected: Rating) => {
    rerender(selected.rating)
}
const onLeave = () => {
    rerender(selectedRating.value)
}
const selectedRating: Ref<null | number> = ref(null)

const { frontmatter, theme } = useData()
const route = useRoute();

const lastUpdated = computed(() => {
    const lastAuditAt = frontmatter.value?.lastAuditAt
    if (!lastAuditAt) {
        return
    }

    return new Intl.DateTimeFormat("en-GB", {
        dateStyle: "long",
    }).format(Date.parse(lastAuditAt))
})

const shouldFetchFeedback = computed(() => (!frontmatter.value || !('feedback' in frontmatter.value) || frontmatter.value.feedback))

const statDefaults = {
    current: {
        votes: 0,
        average: 0,
    },
    previous: {
        votes: 0,
        average: 0,
    },
    all: [],
}
const stats = ref(statDefaults)

const message = ref('')
const feedbackAppHost = theme.value.swag.feedback.host
const identifier = computed(() => {
    let id = route.path.replace(/\.[^/.]+$/, ".md").substring(1);
    if (id.endsWith('/')) {
        id = `${id}index.md`;
    }

    return id
})
const postToApi = async (url: string, body = {}) => {
    try {
        body = {
            identifier: identifier.value,
            version: lastUpdated.value,
            clientId: await getClientId(),
            ...body,
        }
        const response = await fetch(
            `${feedbackAppHost}${url}`,
            {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        return await response.json();
    } catch (e) {
        console.error(e)
    }

    return false
}

const hidden = ref(false)
const fetchFeedback = async () => {
    if (!shouldFetchFeedback.value) {
        stats.value = statDefaults
        return;
    }

    const response = await postToApi('/api/stats')
    if (!response) {
        hidden.value = true
    }
    stats.value = response?.data || statDefaults
}

const error: Ref<string | null> = ref(null)
const clientId = ref()
const getClientId = async () => {
    if (clientId.value) {
        return clientId.value
    }

    clientId.value = localStorage.getItem('SwagDocFeedback-client') || null
    if (clientId.value) {
        return clientId.value
    }

    clientId.value = window.crypto?.randomUUID() || Math.random().toString(10)
    localStorage.setItem('SwagDocFeedback-client', clientId.value)
    return clientId.value
}

const ratingId = ref(null)
const rated = ref(false)
const storeRating = async (rating: number) => {
    selectedRating.value = rating
    const response = await postToApi('/api/rating', { ratingId: ratingId.value, rating: selectedRating.value })
    if (!response?.success) {
        console.error(response)
        error.value = 'Error saving rating. Please, retry.'
        return
    }

    rated.value = true
    ratingId.value = response.data.id
    feedbackId.value = null
    localStorage.setItem(`SwagDocFeedback-rating-${identifier.value}`, JSON.stringify({ rating: selectedRating.value, ratingId: response.data.id }))
    error.value = null
}

const feedbackId = ref(null)
const storeFeedback = async () => {
    const response = await postToApi('/api/feedback', { ratingId: ratingId.value, rating: selectedRating.value, message: message.value })
    if (!response?.success) {
        console.error(response)
        error.value = 'Error saving feedback. Please, retry.'
        return
    }

    rated.value = true
    ratingId.value = response.data.id
    feedbackId.value = response.data.id
    localStorage.setItem(`SwagDocFeedback-rating-${identifier.value}`, JSON.stringify({ rating: selectedRating.value, ratingId: response.data.id }))
    error.value = null
}

const showStats = ref(false)
const finalStats = computed(() => [5, 4, 3, 2, 1].map(rating => stats.value.all.find((stat) => stat.rating === rating) || { rating, votes: 0 }))

const s = (votes: number) => votes === 1 ? '' : 's'

onMounted(() => {
    watch(
        () => route.path,
        async () => {
            const storedValue = JSON.parse(localStorage.getItem(`SwagDocFeedback-rating-${identifier.value}`) || '{}')
            console.log(storedValue)

            stats.value = statDefaults
            error.value = null
            selectedRating.value = storedValue.rating || null
            ratingId.value = storedValue.ratingId || null
            rated.value = false
            message.value = ''
            feedbackId.value = null
            showStats.value = false
            hidden.value = false
            rerender(selectedRating.value)
            await fetchFeedback()
        },
        {
            immediate: true
        }
    )
})
</script>

<style lang="scss">
.SwagDocFeedback {
    @apply flex flex-col items-center gap-6 py-8; 
    border-top: 1px solid var(--vp-c-divider);

    &_heading {
        @apply font-medium text-xl;
    }

    &_starsWrapper {
        @apply flex flex-col gap-4;
    }

    &_stars {
        @apply flex flex-nowrap;
    }

    &_starWrapper {
        @apply relative mb-6;
    }

    &_star {
        @apply text-4xl cursor-pointer mx-3 md:mx-4 my-2 color-orange;
    }

    &_starText {
        @apply absolute text-sm;
        transform: translateX(-50%);
        left: 50%;
    }
}
</style>