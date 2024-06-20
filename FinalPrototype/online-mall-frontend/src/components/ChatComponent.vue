<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="(message, index) in messages" :key="index" :class="{'user-message': message.isUser, 'bot-message': !message.isUser}">
        <span>{{ message.text }}</span>
      </div>
    </div>
    <div class="chat-input">
      <el-input v-model="input" placeholder="Type a message"></el-input>
      <el-button type="primary" @click="sendMessage">Send</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      input: "",
      messages: [
        {text: "Hello! How can I help you today?", isUser: false}
      ]
    };
  },
  methods: {
    sendMessage() {
      if (this.input.trim() !== "") {
        this.messages.push({text: this.input, isUser: true});
        const userMessage = this.input;
        this.input = "";

        // 调用后端API
        axios.post('http://localhost:8888/api/chat', {message: userMessage})
            .then(response => {
              const botMessage = response.data.data; // Assuming the response structure
              this.messages.push({text: botMessage, isUser: false});
            })
            .catch(error => {
              console.error("Error calling the chat API:", error);
              this.messages.push({
                text: "Sorry, I couldn't process your request. Please try again later.",
                isUser: false
              });
            });
      }
    }
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 10px;
}

.chat-input {
  display: flex;
}

.user-message {
  text-align: right;
  margin: 5px;
}

.bot-message {
  text-align: left;
  margin: 5px;
}

.user-message span, .bot-message span {
  display: inline-block;
  max-width: 400px; /* 定义了消息的最大宽度 */
  word-wrap: break-word; /* 允许在单词内换行 */
  padding: 8px 12px;
  border-radius: 15px;
}

.user-message span {
  background-color: #007bff;
  color: #fff;
}

.bot-message span {
  background-color: #f1f1f1;
  color: #333;
}
</style>
