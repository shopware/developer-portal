<script setup lang="ts">
import type { DefaultTheme } from 'vitepress/theme'
import docsearch from '@docsearch/js'
import { onMounted, watch } from 'vue'
import { useRouter, useRoute, useData } from 'vitepress'

const props = defineProps<{
    algolia: DefaultTheme.AlgoliaSearchOptions
}>()

const router = useRouter()
const route = useRoute()
const { site, localeIndex, lang } = useData()

type DocSearchProps = Parameters<typeof docsearch>[0]
type SearchResultPart = {
    value?: string
    [key: string]: unknown
}
type SearchResult = {
    content?: SearchResultPart
    hierarchy?: Partial<Record<HierarchyLevel, SearchResultPart>>
    [key: string]: unknown
}
type SearchHit = {
    url: string
    area?: string
    type?: string
    content?: string
    hierarchy?: Partial<Record<HierarchyLevel, string>>
    _highlightResult?: SearchResult
    _snippetResult?: SearchResult
}

const hierarchyLevels = ['lvl0', 'lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6'] as const
type HierarchyLevel = typeof hierarchyLevels[number]

const versionFilter = 'version:main'
const acronymLabels: Record<string, string> = {
    acl: 'ACL',
    adr: 'ADR',
    api: 'API',
    b2b: 'B2B',
    cms: 'CMS',
    csv: 'CSV',
    html: 'HTML',
    http: 'HTTP',
    json: 'JSON',
    rest: 'REST',
    sdk: 'SDK',
    seo: 'SEO',
    sql: 'SQL',
    twig: 'Twig',
    url: 'URL',
    xml: 'XML',
}
const ignoredPathSegments = new Set([
    'de',
    'en',
    'shopware-6-de',
    'shopware-6-en',
])

onMounted(update)
watch(localeIndex, update)

function update() {
    const options = {
        ...props.algolia,
        ...props.algolia.locales?.[localeIndex.value]
    }
    const rawFacetFilters = options.searchParameters?.facetFilters ?? []
    const facetFilters = [
        ...(Array.isArray(rawFacetFilters)
                ? rawFacetFilters
                : [rawFacetFilters]
        ).filter((filter) => !isLangFacetFilter(filter)),
        `lang:${lang.value}`
    ]
    initialize({
        ...options,
        searchParameters: {
            ...options.searchParameters,
            facetFilters
        }
    })
}

function isLangFacetFilter(filter: string | string[]) {
    return typeof filter === 'string' && filter.startsWith('lang:')
}

function initialize(userOptions: DefaultTheme.AlgoliaSearchOptions) {
    // @ts-ignore
    const options = Object.assign<{}, {}, DocSearchProps>({}, userOptions, {
        container: '#docsearch',

        getMissingResultsUrl({ query }: { query: string }) {
            return `https://github.com/shopware/docs/issues/new?title=Missing%20search%20result%20for%20${query}`
        },

        navigator: {
            navigate({ itemUrl }) {
                const { pathname: hitPathname, origin: hitOrigin } = new URL(itemUrl, window.location.origin)

                // router doesn't handle same-page navigation so we use the native
                // browser location API for anchor navigation
                if (route.path === hitPathname || hitOrigin !== window.location.origin) {
                    window.location.assign(itemUrl)
                } else {
                    router.go(itemUrl)
                }
            }
        },

        transformItems(items) {
            return items.map((item) => transformHit(item as SearchHit))
        },

        /*
        // @ts-expect-error vue-tsc thinks this should return Vue JSX but it returns the required React one
        hitComponent({ hit, children }) {
            return {
                __v: null,
                type: 'a',
                ref: undefined,
                constructor: undefined,
                key: undefined,
                props: { href: hit.url, children }
            }
        },*/

        // https://www.algolia.com/doc/api-reference/search-api-parameters/
        searchParameters: {
            ...userOptions.searchParameters,
            // requires adding "Attributes for faceting" under Algolia > Index > Configuration
            filters: versionFilter,
            hitsPerPage: 30,
            length: 30,
            offset: 0,
        }
    })

    docsearch(options)
}

function getRelativePath(absoluteUrl: string) {
    const { pathname, hash, origin } = new URL(absoluteUrl)
    const cleanPath = pathname.replace(
        /\.html$/,
        site.value.cleanUrls ? '' : '.html'
    );
    const finalOrigin = origin === window.location.origin ? '' : origin;

    return `${finalOrigin}${cleanPath}${hash}`
}

function transformHit(item: SearchHit) {
    const url = getRelativePath(item.url)
    const locationTrail = getLocationTrail(item)
    const result = Object.assign({}, item, { url })

    if (locationTrail.length === 0) {
        return result
    }

    const path = escapeHtml(locationTrail.join(' / '))

    if (item.type === 'lvl1') {
        return Object.assign(result, {
            content: path,
            _snippetResult: withContentValue(item._snippetResult, path),
        })
    }

    if (!shouldReplaceDefaultPath(item)) {
        return result
    }

    return Object.assign(result, {
        _highlightResult: withHierarchyValue(item._highlightResult, 'lvl1', path),
        _snippetResult: withHierarchyValue(item._snippetResult, 'lvl1', path),
    })
}

function shouldReplaceDefaultPath(item: SearchHit) {
    return item.type !== 'lvl0' && item.type !== 'lvl1'
}

function withHierarchyValue(result: SearchResult | undefined, level: HierarchyLevel, value: string): SearchResult {
    const hierarchy = {
        ...(result?.hierarchy ?? {}),
        [level]: {
            ...(result?.hierarchy?.[level] ?? {}),
            value,
        },
    }

    return {
        ...(result ?? {}),
        hierarchy,
    }
}

function withContentValue(result: SearchResult | undefined, value: string): SearchResult {
    return {
        ...(result ?? {}),
        content: {
            ...(result?.content ?? {}),
            value,
        },
    }
}

function getLocationTrail(item: SearchHit) {
    const pageTrail = getPageTrail(item)
    const headingTrail = getHeadingTrail(item)
    const currentTitle = isHierarchyLevel(item.type) ? item.hierarchy?.[item.type] : ''

    return removeTrailingLabel(
        mergeTrails(pageTrail, headingTrail),
        cleanLabel(currentTitle)
    )
}

function getPageTrail(item: SearchHit) {
    const url = new URL(item.url)
    const path = url.pathname
        .replace(/\/index(?:\.html)?$/, '')
        .replace(/\.html$/, '')

    const segments = path
        .split('/')
        .filter(Boolean)
        .filter((segment) => !/^v\d+(?:\.\d+)?$/.test(segment))
        .filter((segment) => !ignoredPathSegments.has(segment))

    const labels = segments.map(formatSegment)
    const sourceLabel = cleanLabel(item.hierarchy?.lvl0)

    if (labels.length > 0 && isKnownTopLevelSegment(segments[0])) {
        return labels
    }

    return mergeTrails(sourceLabel ? [sourceLabel] : [], labels)
}

function getHeadingTrail(item: SearchHit) {
    return hierarchyLevels
        .map((level) => cleanLabel(item.hierarchy?.[level]))
        .filter(Boolean)
}

function mergeTrails(...trails: string[][]) {
    const merged: string[] = []
    const seen = new Set<string>()

    for (const trail of trails) {
        for (const label of trail) {
            const normalized = normalizeLabel(label)

            if (!normalized || seen.has(normalized)) {
                continue
            }

            seen.add(normalized)
            merged.push(label)
        }
    }

    return merged
}

function removeTrailingLabel(trail: string[], label: string) {
    if (!label) {
        return trail
    }

    const normalizedLabel = normalizeLabel(label)
    const result = [...trail]

    while (result.length > 0 && normalizeLabel(result[result.length - 1]) === normalizedLabel) {
        result.pop()
    }

    return result
}

function isKnownTopLevelSegment(segment: string) {
    return [
        'apps',
        'docs',
        'frontends',
        'integrations',
        'meteor',
        'plugins',
        'release-notes',
        'resources',
        'themes',
    ].includes(segment)
}

function isHierarchyLevel(value: string | undefined): value is HierarchyLevel {
    return hierarchyLevels.includes(value as HierarchyLevel)
}

function cleanLabel(value: string | undefined) {
    return (value ?? '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/[\u200B-\u200D\uFEFF]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
}

function normalizeLabel(value: string) {
    return cleanLabel(value)
        .toLowerCase()
        .replace(/&amp;/g, 'and')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
}

function formatSegment(segment: string) {
    const normalized = segment.toLowerCase()

    if (acronymLabels[normalized]) {
        return acronymLabels[normalized]
    }

    return segment
        .replace(/[-_]+/g, ' ')
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => acronymLabels[word.toLowerCase()] ?? `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' ')
}

function escapeHtml(value: string) {
    return value.replace(/[&<>"']/g, (character) => {
        return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
        } as Record<string, string>)[character]
    })
}
</script>

<template>
    <div id="docsearch" />
</template>
