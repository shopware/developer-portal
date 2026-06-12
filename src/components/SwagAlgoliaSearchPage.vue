<template>
  <AisInstantSearch class="SwagAlgoliaSearchPage" :index-name="indexName" :search-client="searchClient">
    <AisConfigure
      :hits-per-page.camel="20"
      filters="version:main"
      :attributes-to-retrieve.camel="['url', 'hierarchy', 'area', 'type']"
      :attributes-to-snippet.camel="['content:24']"
    />

    <div class="SwagAlgoliaSearchPage_sidebar">
      <AisSearchBox class="SwagAlgoliaSearchPage_search">
        <template #default="{ currentRefinement, refine }">
          <form class="SwagAlgoliaSearchPage_searchForm" role="search" @submit.prevent>
            <input
              aria-label="Search"
              autocomplete="off"
              class="SwagAlgoliaSearchPage_searchInput"
              placeholder="Search here..."
              spellcheck="false"
              type="search"
              :value="currentRefinement"
              @input="refine(getInputValue($event))"
            />
            <button
              v-if="currentRefinement"
              aria-label="Clear search"
              class="SwagAlgoliaSearchPage_searchClear"
              type="button"
              @click="refine('')"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </form>
        </template>
      </AisSearchBox>

      <div class="SwagAlgoliaSearchPage_filter">
        <span class="SwagAlgoliaSearchPage_filterTitle">Area</span>
        <AisRefinementList attribute="area" :sort-by.camel="['count:desc', 'name:asc']">
          <template #item="{ item, refine }">
            <label class="ais-RefinementList-label">
              <input
                class="ais-RefinementList-checkbox"
                type="checkbox"
                :value="item.value"
                :checked="item.isRefined"
                @change="refine(item.value)"
              />
              <span class="ais-RefinementList-labelText">{{ formatFacet(item.label) }}</span>
              <span class="ais-RefinementList-count">{{ item.count }}</span>
            </label>
          </template>
        </AisRefinementList>
      </div>
    </div>

    <div class="SwagAlgoliaSearchPage_content">

      <AisStats/>

      <AisHits>
        <template v-slot="{ items }">

          <div class="SwagAlgoliaSearchPage_list">
            <a :href="item.url" class="SwagAlgoliaSearchPage_item c-any-card" v-for="item in items"
               :key="item.objectID">
              <span class="SwagAlgoliaSearchPage_title c-any-card_title">
                <AisHighlight :hit="item" :attribute="getTitleAttribute(item)"/>
              </span>

              <span class="SwagAlgoliaSearchPage_tree" aria-label="Location">
                <template v-for="(entry, index) in getLocationTrail(item)" :key="`${item.objectID}-${entry}-${index}`">
                  <span>{{ entry }}</span>
                  <span v-if="index < getLocationTrail(item).length - 1" aria-hidden="true">/</span>
                </template>
              </span>

              <span v-if="hasSnippet(item)" class="SwagAlgoliaSearchPage_snippet c-any-card_description">
                <AisSnippet :hit="item" attribute="content"/>
              </span>

              <span class="SwagAlgoliaSearchPage_meta">
                <span v-if="item.area" class="SwagAlgoliaSearchPage_badge">{{ formatFacet(item.area) }}</span>
                <span v-if="item.type" class="SwagAlgoliaSearchPage_badge">{{ formatType(item.type) }}</span>
              </span>
            </a>
          </div>
        </template>
      </AisHits>

      <div class="pagination">
        <AisPagination/>
      </div>
    </div>
  </AisInstantSearch>
</template>

<script setup lang="ts">
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
  AisHighlight,
  AisSnippet,
  AisStats,
  AisRefinementList,
  AisConfigure,
  AisPagination
} from 'vue-instantsearch/vue3/es/index.js';
import algoliasearch from 'algoliasearch';
import {useData} from "vitepress";

const {theme} = useData()
const {appId, indexName, apiKey} = theme.value.algolia;
const searchClient = algoliasearch(appId, apiKey);

const hierarchyLevels = ['lvl0', 'lvl1', 'lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6'] as const;
const versionSegmentPattern = /^v\d+(?:\.\d+)*$/i;
const hiddenCharactersPattern = /[\u200B-\u200D\uFEFF]/g;

type HierarchyLevel = typeof hierarchyLevels[number];

type AlgoliaHit = {
  url?: string;
  hierarchy?: Partial<Record<HierarchyLevel, string | null>>;
  area?: string;
  type?: string;
  _snippetResult?: {
    content?: {
      value?: string;
    };
  };
};

const labelOverrides: Record<string, string> = {
  acl: 'ACL',
  adr: 'ADR',
  ai: 'AI',
  api: 'API',
  b2b: 'B2B',
  cli: 'CLI',
  cms: 'CMS',
  css: 'CSS',
  html: 'HTML',
  mcp: 'MCP',
  paas: 'PaaS',
  qa: 'QA',
  saas: 'SaaS',
  sdk: 'SDK',
  seo: 'SEO',
  ssl: 'SSL',
  ui: 'UI',
  url: 'URL',
};

function cleanLabel(value?: string | null): string {
  return (value || '')
    .replace(hiddenCharactersPattern, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getInputValue(event: Event): string {
  return event.target instanceof HTMLInputElement ? event.target.value : '';
}

function normalizeLabel(value: string): string {
  return cleanLabel(value).toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function formatSegment(segment: string): string {
  const decodedSegment = decodeURIComponent(segment)
    .replace(/\.html?$/i, '')
    .replace(/[-_]+/g, ' ')
    .trim();

  return decodedSegment
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => labelOverrides[word.toLowerCase()] || `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function getPageTrail(url?: string): string[] {
  if (!url) {
    return [];
  }

  try {
    const parsedUrl = new URL(url);

    return parsedUrl.pathname
      .split('/')
      .filter(Boolean)
      .map((segment) => segment.replace(/\.html?$/i, ''))
      .filter((segment) => segment !== 'index' && !versionSegmentPattern.test(segment))
      .map(formatSegment)
      .filter(Boolean);
  } catch {
    return [];
  }
}

function getHeadingTrail(hit: AlgoliaHit): string[] {
  return hierarchyLevels
    .map((level) => cleanLabel(hit.hierarchy?.[level]))
    .filter(Boolean);
}

function getLocationTrail(hit: AlgoliaHit): string[] {
  const pageTrail = getPageTrail(hit.url);
  const headingTrail = getHeadingTrail(hit);

  if (!pageTrail.length) {
    return headingTrail;
  }

  const seenEntries = new Set(pageTrail.map(normalizeLabel));
  const mergedTrail = [...pageTrail];

  for (const entry of headingTrail) {
    const normalizedEntry = normalizeLabel(entry);

    if (!normalizedEntry || seenEntries.has(normalizedEntry)) {
      continue;
    }

    mergedTrail.push(entry);
    seenEntries.add(normalizedEntry);
  }

  return mergedTrail;
}

function getTitleAttribute(hit: AlgoliaHit): string {
  const deepestLevel = [...hierarchyLevels]
    .reverse()
    .find((level) => cleanLabel(hit.hierarchy?.[level]));

  return deepestLevel ? `hierarchy.${deepestLevel}` : 'url';
}

function hasSnippet(hit: AlgoliaHit): boolean {
  return Boolean(hit._snippetResult?.content?.value);
}

function formatFacet(value: string): string {
  return cleanLabel(value)
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => labelOverrides[word.toLowerCase()] || `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    .join(' ');
}

function formatType(type: string): string {
  const headingMatch = type.match(/^lvl(\d+)$/);

  if (headingMatch) {
    return `Heading ${headingMatch[1]}`;
  }

  return formatFacet(type);
}
</script>

<style lang="scss">
.ais-Pagination-list {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  list-style: none;
  margin: 0;
  padding-left: 0;
}

.ais-Pagination-item {
  display: inline-flex;
}

.ais-Pagination-link {
  align-items: center;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  color: var(--c-text);
  display: inline-flex;
  font-size: 0.875rem;
  height: 2rem;
  justify-content: center;
  line-height: 1;
  min-width: 2rem;
  padding: 0 0.5rem;
  text-decoration: none;
}

.ais-Pagination-link:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.ais-Pagination-item--selected .ais-Pagination-link {
  background: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  color: #fff;
  font-weight: 700;
}

.ais-Pagination-item--disabled .ais-Pagination-link {
  color: var(--c-text-light);
  cursor: not-allowed;
  opacity: 0.45;
  pointer-events: none;
}

.VPPage {
  max-width: 1440px;
  padding: 0 2rem;
  margin: 0 auto;
}

.ais-HierarchicalMenu-count {
  @apply ml-2;
}

.ais-RefinementList-list {
  list-style: none;
  padding-left: 0;
}

.ais-RefinementList-item {
  margin-top: 0.25rem;
}

.ais-RefinementList-label {
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
}

.ais-RefinementList-labelText {
  min-width: 0;
  overflow-wrap: anywhere;
}

.ais-RefinementList-count {
  margin-left: auto;
  color: var(--c-text-light);
  font-size: 0.75rem;
}

.SwagAlgoliaSearchPage {
  @apply grid md:flex gap-10 my-6;

  &_sidebar {
    @apply md:w-64 md:flex-none;
    @apply grid gap-4;
    @apply self-start;
  }

  &_content {
    @apply md:flex-1 md:min-w-0;
    @apply grid gap-4;
    @apply self-start;
  }

  &_searchForm {
    position: relative;
  }

  &_searchInput {
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    color: var(--c-text);
    font: inherit;
    height: 2.5rem;
    outline: none;
    padding: 0 2.5rem 0 0.75rem;
    width: 100%;
  }

  &_searchInput::placeholder {
    color: var(--c-text-light);
  }

  &_searchInput:focus {
    border-color: var(--vp-c-brand-1);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--vp-c-brand-1) 18%, transparent);
  }

  &_searchInput::-webkit-search-cancel-button,
  &_searchInput::-webkit-search-decoration {
    appearance: none;
    -webkit-appearance: none;
  }

  &_searchClear {
    align-items: center;
    background: transparent;
    border: 0;
    border-radius: 6px;
    color: var(--c-text-light);
    cursor: pointer;
    display: inline-flex;
    font-size: 1.25rem;
    height: 1.75rem;
    justify-content: center;
    line-height: 1;
    padding: 0;
    position: absolute;
    right: 0.375rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.75rem;
  }

  &_searchClear:hover,
  &_searchClear:focus-visible {
    background: var(--vp-c-bg-soft);
    color: var(--c-text);
  }

  &_list {
    @apply grid gap-4;
  }

  &_item {
    @apply p-4 flex flex-col gap-3;
    text-decoration: none;
  }

  &_tree {
    @apply flex flex-wrap items-center gap-1 text-sm;
    color: var(--c-text-light);
    line-height: 1.5;
  }

  &_snippet {
    line-height: 1.6;
  }

  &_meta {
    @apply flex flex-wrap gap-2;
  }

  &_badge {
    border: 1px solid var(--vp-c-divider);
    border-radius: 999px;
    color: var(--c-text-light);
    font-size: 0.75rem;
    line-height: 1;
    padding: 0.25rem 0.5rem;
  }

  &_filter {
    border-bottom: 1px solid var(--vp-c-divider);
    padding-bottom: 1rem;
  }

  &_filterTitle {
    color: var(--c-text);
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  &_sub {
    @apply text-xs;
    color: var(--c-text);
  }
}

.pagination {
  @apply flex justify-end;
  margin-top: 0.5rem;
}
</style>
