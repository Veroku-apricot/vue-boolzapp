var app = new Vue ({
  el: '#panel',
  data: {
    newText: '',
    i: 0,
    searchContact: '',
    conversations: [{
      // Conversation 1
      avatar: 'img/avatar_5.jpg',
      name: 'Link',
      user: true,
      chat: [{
        message: 'Hey i found a weird green cape... is it yours?',
        status: 'received',
        time: '20.11.2020 11.30'
      },
      {
        message: "Nope, don't think so",
        status: 'sent',
        time: '20.11.2020 11.32'
      }]
    },
      // Conversation 2
    {
      avatar: 'img/avatar_2.jpg',
      name: 'Kitbooga',
      user: true,
      chat: [{
        message: 'Hey there, how are you? Hope you doing fine!',
        status: 'sent',
        time: '20.11.2020 11.30'
      },
      {
        message: "Hello!",
        status: 'received',
        time: '20.11.2020 11.32'
      },
      {
        message: "Yup, all good, thanks!",
        status: 'received',
        time: '20.11.2020 11.32'
      }]
    },
      // Conversation 3
    {
      avatar: 'img/avatar_8.jpg',
      name: 'Hipster Mike',
      user: true,
      chat: [{
        message: 'Come over and check out my beard',
        status: 'received',
        time: '20.11.2020 11.30'
      },
      {
        message: "Ehm... No thanks",
        status: 'sent',
        time: '20.11.2020 11.34'
      },
      {
        message: "Envious...",
        status: 'received',
        time: '20.11.2020 11.36'
      }]
    },
      // Conversation 4
    {
      avatar: 'img/avatar_4.jpg',
      name: 'Lewis',
      user: true,
      chat: [{
        message: "Hey, wanna hang out at the park? I'm with my dog",
        status: 'sent',
        time: '20.11.2020 11.30'
      },
      {
        message: "Sure! My cousin Luisa is coming too :)",
        status: 'received',
        time: '20.11.2020 11.31'
      },
      {
        message: "Nice!",
        status: 'sent',
        time: '20.11.2020 11.33'
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
      if (this.newText === ''){
      }else{
        this.conversations[this.i].chat.push({message: this.newText, status: 'sent', time: 'Oggi, ' + this.getTime()});
        this.newText = '';
        // Receive message
        setTimeout (() => {
          this.conversations[this.i].chat.push({message: 'Ok dude', status: 'received', time: 'Oggi, ' + this.getTime()});
        }, 1500)
      }
    },
    filter: function () {
      this.conversations.forEach(obj => {
        if (obj.name.toLowerCase().includes(this.searchContact.toLowerCase())){
          obj.user= true;
        }else{
          obj.user= false;
        }
      })
    },
    getTime: function () {
      var d = new Date();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      return hour + ':' + minutes;
    }
  }



})
