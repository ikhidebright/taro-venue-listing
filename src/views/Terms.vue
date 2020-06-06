<template>
    <div class="fun">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <h1>I am {{ work }}</h1>
    </div>
</template>

<script>
import WordSwitch from '../Services/Num'

export default {
  name: 'Terms',
  data () {
    return {
      occupation: null,
      counter: 0,
      jobs: ['A Developer', 'Fire', 'War', 'the Liquid Metal', 'the Indaboski']
    }
  },
  methods: {
    setOccupation () {
      let last = this.jobs.length - 1
      this.occupation = this.jobs[this.counter]
      let checkLastItem = this.jobs.indexOf(this.occupation) == last
      if (checkLastItem) {
        this.counter = 0
      } else {
        ++this.counter
      }
    }
  },
  computed: {
    work () {
      return this.occupation
    }
  },
  mounted () {
    WordSwitch(['A Developer', 'Fire', 'War', 'the Liquid Metal', 'the Indaboski'], 0, 3000)  
  }
}
</script>