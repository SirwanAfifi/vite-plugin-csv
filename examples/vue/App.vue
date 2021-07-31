<template>
  <div class="max-w-6xl px-8 py-8">
    <h1 class="text-3xl text-center m-4">CSV Data</h1>
    <table class="shadow-lg bg-white w-full">
      <thead>
        <tr>
          <td
            v-for="h of Object.keys(contacts[0])"
            :key="h"
            class="bg-blue-100 border text-left px-8 py-4 font-bold uppercase"
          >
            {{ h }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dt of contacts" :key="dt">
          <td v-for="k of Object.values(dt)" :key="k" class="border px-8 py-4">
            <span>{{ k }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import contacts from "../contacts.csv";
</script>
