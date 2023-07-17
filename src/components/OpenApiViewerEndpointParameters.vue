<template>
  <div data-endpoint-parameters class="grid gap-2">
    <!-- group parameters by "in" -->
    <div v-for="(parameters, group) in getGroupedParameters(endpoint)">
      <h2>{{ group }} parameters</h2>
      <div class="grid gap-2">
        <div v-for="parameter in parameters" class="grid gap-2">
          <div class="flex gap-2">
            <span class="font-medium">{{ parameter.name }}</span>
            <span class="italic">{{ parameter.schema.type }}</span>
          </div>
          <div>
            {{ parameter.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {OpenAPIV3} from "openapi-types";

const props = defineProps({
  endpoint: {
    type: Object as OpenAPIV3.PathItemObject
  }
})

const getGroupedParameters = (endpoint: OpenAPIV3.PathItemObject) => {
  console.log(endpoint);
  const groups = {
    header: [],
    query: [],
    get: [],
    post: [],
  };
  endpoint.parameters?.forEach((param: OpenAPIV3.ParameterObject | OpenAPIV3.ReferenceObject) => {
    if (!param.in) {
      return;
    }
    if (!groups[param.in]) {
      groups[param.in] = [];
    }
    groups[param.in].push(param);
  })

  Object.keys(groups).forEach(key => {
    if (groups[key].length > 0) {
      return;
    }

    delete groups[key];
  })

  return groups;
}
</script>