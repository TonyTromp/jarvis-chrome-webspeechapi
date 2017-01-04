    var config = {
        'trigger'  : 'hello computer'
      , 'actions'  : [
         {
             'type'   : 'match-exact'
           , 'action' : function(event) {
                  alert('hello'+event);
              }
           , 'keywords' : ['what\'s','the','weather']
         }
      ]
    };