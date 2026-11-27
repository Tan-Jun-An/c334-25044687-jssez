import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/1a81a6c6-0f2b-45ca-ac6b-037798c6bf35/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    "Hi, I'm the JS-SEZ advisor.",
    'Ask me about zones, incentives, setup or staff passes.'
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'Ask about the JS-SEZ Playbook.',
      getStarted: 'New conversation',
      inputPlaceholder: 'Type your question...'
    }
  }
});

const chatToggle = document.querySelector('#n8n-chat .chat-window-toggle');

if (chatToggle) {
  chatToggle.setAttribute('role', 'button');
  chatToggle.setAttribute('tabindex', '0');
  chatToggle.setAttribute('aria-label', 'Open or close JS-SEZ advisor chat');
  chatToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      chatToggle.click();
    }
  });
}
