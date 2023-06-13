<template>
    <div>
      <form @submit="getRhymingWord">
        <label for="rhyme">Enter a word:</label>
        <input type="text" id="rhyme" v-model="inputValue">
        <button type="submit">Submit</button>
      </form>
      <div v-if="showRhymingWords">
        <h3>Rhyming Words:</h3>
        <button @click="toggleSortOrder">Toggle Sort Order</button>
        <ul>
          <li v-for="word in sortedRhymingWords" :key="word">{{ word }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RhymeForm',
    data() {
      return {
        inputValue: '',
        rhymingWords: [],
        showRhymingWords: false,
        sortOrder: 'asc',
      };
    },
    methods: {
      async getRhymingWord(event) {
        event.preventDefault();
        const inputValue = this.inputValue.toLowerCase();
  
        try {
          const response = await fetch(`https://api.datamuse.com/words?rel_rhy=${inputValue}`);
          if (response.ok) {
            const words = await response.json();
            const rhymingWords = words.map((word) => word.word);
            this.rhymingWords = rhymingWords;
            this.showRhymingWords = true; // Set the flag to show the rhyming words
            this.sortWords(); // Sort the words initially based on the current sort order
          } else {
            throw new Error("Network response was not ok");
          }
        } catch (error) {
          console.error(error);
        }
      },
      sortWords() {
        if (this.sortOrder === 'asc') {
          this.rhymingWords.sort(); // Sort the rhyming words in ascending order
        } else if (this.sortOrder === 'desc') {
          this.rhymingWords.sort().slice().reverse(); // Sort the rhyming words in descending order
        }
      },
      toggleSortOrder() {
        if (this.sortOrder === 'asc') {
          this.sortOrder = 'desc'; // Toggle to descending order
        } else if (this.sortOrder === 'desc') {
          this.sortOrder = 'asc'; // Toggle to ascending order
        }
        this.sortWords(); // Sort the words based on the updated sort order
      },
    },
    computed: {
      sortedRhymingWords() {
        // Return the sorted rhyming words based on the current sort order
        if (this.sortOrder === 'asc') {
          return this.rhymingWords;
        } else if (this.sortOrder === 'desc') {
          return this.rhymingWords.slice().reverse();
        }
      },
    },
  };
  </script>
  