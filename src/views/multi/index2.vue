<template>
  <div class="container">
    <div class="sidebar">
      <svg width="52" height="52" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- SVG 内容 -->
      </svg>
      <nav id="model-list">
        <a href="#" class="active" data-mode="all-in-one">
          <span>All-In-One</span>
        </a>
      </nav>
      <button id="sidebar-toggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
    <div class="main">
      <div class="chat-windows">
        <!-- 聊天窗口将在这里动态生成 -->
      </div>
      <div class="input-container">
        <div class="layout-buttons">
          <button data-layout="2" class="active">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="14" height="12" rx="2" stroke="#BDBDBD" stroke-width="1.5"/>
              <line x1="10" y1="4" x2="10" y2="16" stroke="#BDBDBD" stroke-width="1.5"/>
            </svg>
          </button>
          <button data-layout="3">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="14" height="12" rx="2" stroke="#BDBDBD" stroke-width="1.5"/>
              <line x1="7.5" y1="4" x2="7.5" y2="16" stroke="#BDBDBD" stroke-width="1.5"/>
              <line x1="12.5" y1="4" x2="12.5" y2="16" stroke="#BDBDBD" stroke-width="1.5"/>
            </svg>
          </button>
          <button data-layout="4">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="14" height="12" rx="2" stroke="#BDBDBD" stroke-width="1.5"/>
              <line x1="10" y1="4" x2="10" y2="16" stroke="#BDBDBD" stroke-width="1.5"/>
              <line x1="3" y1="10" x2="17" y2="10" stroke="#BDBDBD" stroke-width="1.5"/>
            </svg>
          </button>
        </div>
        <input type="text" placeholder="Type your message..." id="user-input" v-model="userMessage">
        <button id="send-button" class="input-button" @click="sendMessage">发送</button>
      </div>
    </div>
  </div>
</template>



<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ChatComponent',
  setup() {
    const chatWindows = ref(null);
    const layoutButtons = ref([]);
    const userMessage = ref('');
    const sidebar = ref(null);
    const sidebarToggle = ref(null);
    const models = ref([]); // 保存所有模型列表

    const initializeAllInOneMode = () => {
      const allInOneLink = document.querySelector('.sidebar nav a[data-mode="all-in-one"]');
      if (allInOneLink) {
        allInOneLink.click();
      }
    };

    const addSidebarLinkListeners = () => {
      const sidebarLinks = document.querySelectorAll('.sidebar nav a');
      sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const mode = link.dataset.mode;
          sidebarLinks.forEach(link => link.classList.remove('active'));
          link.classList.add('active');

          if (mode === 'all-in-one') {
            layoutButtons.value.forEach(btn => btn.style.display = 'inline-block');
            toggleLayout(2);
          } else {
            layoutButtons.value.forEach(btn => btn.style.display = 'none');
            chatWindows.value.innerHTML = '';
            const chatWindow = createChatWindow([mode]);
            chatWindows.value.appendChild(chatWindow);
            chatWindows.value.style.gridTemplateColumns = '1fr';

            const chatBody = chatWindows.value.querySelector('.chat-body');
            chatBody.style.maxHeight = '65vh';
          }
        });
      });
    };

const createChatWindow = (models) => {
  const chatWindow = document.createElement('div');
  chatWindow.classList.add('chat-window');

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');

  const select = document.createElement('select');
  models.forEach(model => {
    model = model.trim();
    const option = document.createElement('option');
    option.value = model;
    option.textContent = model;
    select.appendChild(option);
  });

  // 设置选择框样式，使其居中
  select.style.border = '1px solid #ddd';
  select.style.borderRadius = '5px';
  select.style.padding = '5px 10px';
  select.style.backgroundColor = '#f9f9f9';
  select.style.color = '#555';
  select.style.fontSize = '14px';
  select.style.margin = '0 auto';
  select.style.display = 'block';

  chatHeader.appendChild(select);

  const chatBody = document.createElement('div');
  chatBody.classList.add('chat-body');

  chatWindow.appendChild(chatHeader);
  chatWindow.appendChild(chatBody);

  // 添加边框样式
  chatWindow.style.border = '2px solid transparent';
  chatWindow.style.backgroundClip = 'padding-box';
  chatWindow.style.position = 'relative';
  chatWindow.style.borderRadius = '15px';
  chatWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  chatWindow.style.overflow = 'hidden';

  // 创建伪元素用于渐变边框
  const pseudoElement = document.createElement('div');
  pseudoElement.style.position = 'absolute';
  pseudoElement.style.top = '-2px';
  pseudoElement.style.left = '-2px';
  pseudoElement.style.right = '-2px';
  pseudoElement.style.bottom = '-2px';
  pseudoElement.style.borderRadius = '15px';
  pseudoElement.style.background = 'linear-gradient(45deg, #87cefa, #ff7f50)';
  pseudoElement.style.zIndex = '-1';
  
  chatWindow.appendChild(pseudoElement);

  return chatWindow;
};

const toggleLayout = (layout) => {
  chatWindows.value.innerHTML = '';
  layoutButtons.value.forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.layout-buttons button[data-layout="${layout}"]`);
  activeBtn.classList.add('active');

  let columns;
  if (layout === 2 || layout === 3) {
    columns = '1fr '.repeat(layout);
  } else if (layout === 4) {
    columns = '1fr 1fr';
  }
  chatWindows.value.style.gridTemplateColumns = columns.trim();

  for (let i = 0; i < layout; i++) {
    const chatWindow = createChatWindow(models.value);
    chatWindows.value.appendChild(chatWindow);
  }

  if (layout === 4) {
    const chatBodies = chatWindows.value.querySelectorAll('.chat-body');
    chatBodies.forEach(chatBody => {
      chatBody.style.maxHeight = '23.6vh';
    });
  } else {
    const chatBodies = chatWindows.value.querySelectorAll('.chat-body');
    chatBodies.forEach(chatBody => {
      chatBody.style.maxHeight = '65vh';
    });
  }
};

const sendMessage = () => {
  if (userMessage.value.trim()) {
    const selectedModels = Array.from(document.querySelectorAll('.chat-window .chat-header select')).map(select => select.value);

    const chatBodies = document.querySelectorAll('.chat-window .chat-body');
    chatBodies.forEach(chatBody => {
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message', 'user-message');
      userMessageElement.textContent = userMessage.value;
      chatBody.appendChild(userMessageElement);
      chatBody.scrollTop = chatBody.scrollHeight;

      // 添加气泡样式
      userMessageElement.style.padding = '10px';
      userMessageElement.style.borderRadius = '10px';
      userMessageElement.style.backgroundColor = '#87cefa';
      userMessageElement.style.color = '#fff';
      userMessageElement.style.marginBottom = '10px';
      userMessageElement.style.maxWidth = '70%';
      userMessageElement.style.marginLeft = 'auto';
    });

    const loadingMessageElements = Array.from(document.querySelectorAll('.chat-window .chat-body')).map(chatBody => {
      const loadingMessage = document.createElement('div');
      loadingMessage.classList.add('message', 'loading-message');
      loadingMessage.textContent = 'Loading...';
      chatBody.appendChild(loadingMessage);
      
      // 添加气泡样式
      loadingMessage.style.padding = '10px';
      loadingMessage.style.borderRadius = '10px';
      loadingMessage.style.backgroundColor = '#f0f8ff';
      loadingMessage.style.color = '#333';
      loadingMessage.style.marginBottom = '10px';
      loadingMessage.style.maxWidth = '70%';
      loadingMessage.style.marginRight = 'auto';
      loadingMessage.style.opacity = '0.5';

      return loadingMessage;
    });

    fetch('http://localhost:4100/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userMessage: userMessage.value, selectedModels })
    })
      .then(response => response.json())
      .then(data => {
        const chatBodies = document.querySelectorAll('.chat-window .chat-body');
        chatBodies.forEach((chatBody, index) => {
          const response = data.responses[index];
          const assistantMessageElement = document.createElement('div');
          assistantMessageElement.classList.add('message', 'assistant-message');
          const typingTextElement = document.createElement('span');
          typingTextElement.classList.add('typing-text');
          assistantMessageElement.appendChild(typingTextElement);
          chatBody.appendChild(assistantMessageElement);
          chatBody.removeChild(loadingMessageElements[index]);
          chatBody.scrollTop = chatBody.scrollHeight;

          // 添加气泡样式
          assistantMessageElement.style.padding = '10px';
          assistantMessageElement.style.borderRadius = '10px';
          assistantMessageElement.style.backgroundColor = '#f0f8ff';
          assistantMessageElement.style.color = '#333';
          assistantMessageElement.style.marginBottom = '10px';
          assistantMessageElement.style.maxWidth = '70%';
          assistantMessageElement.style.marginRight = 'auto';

          let i = 0;
          const typingSpeed = 10; // 每 10 毫秒输出一个字符

          function typeText() {
            if (i < response.length) {
              typingTextElement.textContent += response.charAt(i);
              i++;
              setTimeout(typeText, typingSpeed);
            }
          }

          typeText();
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

    userMessage.value = '';
  }
};

onMounted(() => {
  fetch(`http://localhost:4100/models`)
    .then(response => response.json())
    .then(data => {
      models.value = data.models; // 保存所有模型
      const modelListElement = document.getElementById('model-list');
      modelListElement.innerHTML = ''; // 确保每次添加新模型前清空模型列表
      modelListElement.innerHTML = `<a href="#" class="active" data-mode="all-in-one"><span>All-In-One</span></a>`; // 只显示 All-In-One
      addSidebarLinkListeners();
      initializeAllInOneMode();
    });

  layoutButtons.value = document.querySelectorAll('.layout-buttons button');
  chatWindows.value = document.querySelector('.chat-windows');
  sidebar.value = document.querySelector('.sidebar');
  sidebarToggle.value = document.getElementById('sidebar-toggle');

  layoutButtons.value.forEach(btn => {
    btn.addEventListener('click', () => {
      const layout = parseInt(btn.dataset.layout, 10);
      toggleLayout(layout);
    });
  });

  sidebarToggle.value.addEventListener('click', () => {
    sidebar.value.classList.toggle('collapsed');
  });
});



    return {
      userMessage,
      sendMessage
    };
  }
};
</script>


<style scoped>
/* 将原来的 CSS 样式粘贴到这里 */
/* 基本样式 */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: #8ED1FC;
  color: #333;
}

.container {
  display: grid;
  grid-template-columns: 150px 1fr; /* 缩短侧边栏宽度 */
  height: 100%;
}

/* 侧边栏样式 */
.sidebar {
  background-color: rgba(255, 255, 255, 0.5);
  color: #333;
  padding: 20px;
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 60px;
}

.sidebar nav {
  margin-top: 20px;
}

.sidebar nav a {
  display: flex;
  align-items: center;
  color: #333;
  padding: 10px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  opacity: 0.7;
}

.sidebar nav a:hover,
.sidebar nav a.active {
  background-color: #fff;
  color: #333;
  opacity: 1;
}

.sidebar nav a span {
  margin-left: 10px;
}

.sidebar.collapsed nav a span {
  display: none;
}

/* 主体区域样式 */
.main {
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 20px;
}

/* 聊天窗口样式 */
.chat-windows {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.chat-window {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border: 2px solid transparent;
  position: relative;
}

.chat-window::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  z-index: -1;
  border-radius: 15px;
  background: linear-gradient(45deg, #87cefa, #ff7f50);
  background-origin: border-box;
}

.chat-window:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.chat-header {
  background-color: rgba(255, 255, 255, 0.5);
  color: #555;
  padding: 10px;
  display: flex;
  justify-content: center; /* 居中模型选择框 */
  align-items: center;
  border-bottom: 1px solid #ddd;
}

.chat-header select {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #f9f9f9;
  color: #555;
  font-size: 14px;
  margin: 0 auto;
  display: block;
}

.chat-body {
  padding: 10px;
  overflow-y: auto;
  color: #333;
  flex-grow: 1;
}

/* 布局切换按钮样式 */
.layout-buttons {
  display: flex;
  margin-right: 5px;
}

.layout-buttons button {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 5px;
  margin-right: 5px;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.layout-buttons button:hover,
.layout-buttons button.active {
  opacity: 1;
}

.layout-buttons button svg {
  width: 32px;
  height: 32px;
}

/* 输入框样式 */
.input-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.input-container input {
  flex-grow: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin-left: 10px;
}

.input-button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #87cefa;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.chat-windows {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

/* 消息气泡样式 */
.message {
  padding: 10px;
  border-radius: 10px;
  max-width: 70%;
  margin-bottom: 10px;
}

.user-message {
  background-color: #87cefa;
  color: #fff;
  margin-left: auto;
  align-self: flex-end;
}

.assistant-message {
  background-color: #f0f8ff;
  color: #333;
  margin-right: auto;
  align-self: flex-start;
}

.loading-message {
  background-color: #f0f8ff;
  color: #333;
  margin-right: auto;
  opacity: 0.5;
  align-self: flex-start;
}


</style>
