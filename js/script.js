var app = new Vue ({
  el: '#panel',
  data: {
    i: [0],
    avatars: [
      'img/avatar_5.jpg',
      'img/avatar_2.jpg',
      'img/avatar_8.jpg',
      'img/avatar_4.jpg'
    ],
    names: [
      'Link',
      'Kitbooga',
      'Hipster Mike',
      'Lewis'
    ]
  },
  methods: {
    openConv: function (index) {
      this.i = index;
    }


  }




})
