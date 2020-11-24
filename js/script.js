var app = new Vue ({
  el: '#panel',
  data: {
    newText: '',
    i: 0,
    conversations: [{
      // Conversation 1
      avatar: 'img/avatar_5.jpg',
      name: 'Link',
      lastMessage: "Nope, don't think so",
      chat: [{
        message: 'Hey i found a weird green cape... is it yours?',
        status: 'received'
      },
      {
        message: "Nope, don't think so",
        status: 'sent'
      }]
    },
      // Conversation 2
    {
      avatar: 'img/avatar_2.jpg',
      name: 'Kitbooga',
      lastMessage: "Yup, all good, thanks!",
      chat: [{
        message: 'Hey there, how are you? Hope you doing fine!',
        status: 'sent'
      },
      {
        message: "Hello!",
        status: 'received'
      },
      {
        message: "Yup, all good, thanks!",
        status: 'received'
      }]
    },
      // Conversation 3
    {
      avatar: 'img/avatar_8.jpg',
      name: 'Hipster Mike',
      lastMessage: "Envious...",
      chat: [{
        message: 'Come over and check out my beard',
        status: 'received'
      },
      {
        message: "Ehm... No thanks",
        status: 'sent'
      },
      {
        message: "Envious...",
        status: 'received'
      }]
    },
      // Conversation 4
    {
      avatar: 'img/avatar_4.jpg',
      name: 'Lewis',
      lastMessage: "Nice!",
      chat: [{
        message: "Hey, wanna hang out at the park? I'm with my dog",
        status: 'sent'
      },
      {
        message: "Sure! My cousin Luisa is coming too :)",
        status: 'received'
      },
      {
        message: "Nice!",
        status: 'sent'
      }]
    }]
  },
  methods: {
    // Open conversation
    openConv: function (index) {
      this.i = index;
    },
    // Send message
    send: function () {
      this.conversations[this.i].chat.push({message: this.newText, status: 'sent'});
      this.conversations[this.i].lastMessage = this.newText;
      this.newText = '';
      setTimeout (this.receive, 1500);
    },

    receive: function () {
      this.conversations[this.i].chat.push({message: 'Ok dude', status: 'received'});
      this.conversations[this.i].lastMessage = 'Ok dude';
    }
  }




})
