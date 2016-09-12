angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    // MathFactory, MathService
    controller: function (ContactFactory) {
      var vm = this;
      var id = 0;

      vm.hero = 'New contact';
      vm.heroList = 'List a contacts';
      vm.list = [];

      vm.form = {
        id       : 0,
        name     : '',
        telephone: '',
        email    : ''
      };

      vm.add  = add;
      vm.edit = edit;
      vm.remove = remove;

      (function onInit() {
        return vm.list = ContactFactory.list();
      })();

      function add(contact) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

        if (contact.id) {
          clean();
          return ContactFactory.edit(contact);
        }

        contact.id = id = id + 1;

        clean();
        ContactFactory.add(contact);
      }

      function edit(contact, indexList) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

        vm.form.name      = contact.name;
        vm.form.telephone = contact.telephone;
        vm.form.email     = contact.email;
        vm.form.id        = contact.id;
      }

      function remove(contact) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

       return ContactFactory.remove(contact);
      }

      function clean() {
        return vm.form = {
          id       : 0,
          name     : '',
          telephone: '',
          email    : ''
        };
      }


      // vm.hello = 'Hello School of net!';
      // vm.person = {
      //   name : 'Leonan',
      //   lastname: 'Luppi'
      // };

      // vm.list = [{
      //   name: 'Leonan',
      //   lastname: 'Luppi'
      // },
      // {
      //   name: 'Wesley',
      //   lastname: 'Willians'

      // }, {
      //   name: 'Luiz',
      //   lastname: 'Carlos'
      // }];

      // vm.alertMe = function() {
      //   alert(vm.person.name + ' ' + vm.person.lastname);
      // };

      // vm.sum = function(num1, num2) {
      //   return alert(MathService.sumService(num1, num2));
      // };

      // vm.sub = function(num1, num2) {
      //   return alert(MathService.subService(num1, num2));
      // };

    }
  });
