<template>
  <div>
    <el-form :inline="true" v-if="showInitial">
      <h1>Write your text</h1>
      <el-form-item>
        <el-input id="init-text" placeholder="Jane Doe" v-model="initialText"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveInitial">Start</el-button>
      </el-form-item>
    </el-form>
    <div v-else>
      <h1 class="anagram__initial" v-html="textStatus"></h1>
      <div>
        <el-form :inline="true">
          <el-form-item>
            <el-input
              ref="anagramInput"
              type="success"
              v-model="anagram"
              @keyup.delete.native="switchCharStatus()"
              @keydown.native="onCharInput($event)">
            </el-input>
          </el-form-item>
        </el-form>

        <el-button :type="btnColor" @click="onPlayAgain()">
          Play Again
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixins/utils';

export default {
  name: 'anagram',
  mixins: [mixin],
  data() {
    return {
      initialText: '',
      initialTextSplited: [],
      showInitial: true,
      anagram: '',
    };
  },
  computed: {
    textStatus() {
      let text = '';

      this.initialTextSplited.forEach((item) => {
        text += item.isAvailable ? item.char : `<span class="disabled">${item.char}</span>`;
      });

      return text;
    },
    btnColor() {
      const found = this.initialTextSplited.find(item => item.isAvailable);

      return found ? 'primary' : 'success';
    },
  },
  methods: {
    onCharInput(e) {
      if (this.isSpecial(e.keyCode) || e.ctrlKey) {
        return;
      }

      const found = this.initialTextSplited.find(item =>
        item.isAvailable && (item.char.toLowerCase() === e.key),
      );

      if (found) {
        found.isAvailable = false;
      } else {
        this.beep();
        e.preventDefault();
      }
    },
    onPlayAgain() {
      this.initialText = '';
      this.initialTextSplited = [];
      this.showInitial = true;
      this.anagram = '';
    },
    isSpecial(char) {
      return this.specialChars.includes(char);
    },
    switchCharStatus() {
      const self = this;

      // Set all available again
      this.initialTextSplited.map((char) => {
        const item = char;
        item.isAvailable = true;
        return item;
      });

      this.anagram.split('').forEach((char) => {
        const found = self.initialTextSplited.find(item =>
          item.isAvailable && (item.char.toLowerCase() === char),
        );

        if (found) {
          found.isAvailable = false;
        }
      });
    },
    saveInitial() {
      const self = this;
      this.showInitial = false;
      const chars = this.initialText.split('');

      chars.forEach((item) => {
        self.initialTextSplited.push({
          char: item,
          isAvailable: true,
        });
      });
    },
  },
};
</script>

<style lang="scss">
  .anagram {
    &__initial {
      span.disabled {
        opacity: 0.15;
        text-decoration: line-through;
      }
    }
  }
</style>
