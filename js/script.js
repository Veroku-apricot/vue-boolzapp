var app = new Vue ({
  el: '#panel',
  data: {
    newText: '',
    i: 0,
    conversations: [{
      // Conversation 1
      avatar: 'img/avatar_5.jpg',
      name: 'Link',
      chat: [{
        message: 'Hey i found a weird green cape... is it yours?',
        status: 'receved'
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
      chat: [{
        message: 'Hey there, how are you? Hope you doing fine!',
        status: 'sent'
      },
      {
        message: "Hello!",
        status: 'receved'
      },
      {
        message: "Yup, all good, thanks!",
        status: 'receved'
      }]
    },
      // Conversation 3
    {
      avatar: 'img/avatar_8.jpg',
      name: 'Hipster Mike',
      chat: [{
        message: 'Come over and check out my beard',
        status: 'receved'
      },
      {
        message: "Ehm... No thanks",
        status: 'sent'
      },
      {
        message: "Envious...",
        status: 'receved'
      }]
    },
      // Conversation 4
    {
      avatar: 'img/avatar_4.jpg',
      name: 'Lewis',
      chat: [{
        message: "Hey, wanna hang out at the park? I'm with my dog",
        status: 'sent'
      },
      {
        message: "Sure! My cousin Luisa is coming too :)",
        status: 'receved'
      },
      {
        message: "Nice!",
        status: 'sent'
      }]
    }]
  },
  methods: {
    openConv: function (index) {
      this.i = index;
    },
    send: function () {
      this.conversations[this.i].chat.push({message: this.newText, status: 'sent'});
      this.newText = ''
    }
  }




})
