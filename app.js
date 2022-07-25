const makeUser = function () {
    return {
      result:[],
      jump: function() {
        this.result.push('jumping');
        return this;
      },
      speak: function() {
        this.result.push('speaking');
        return this;
      },
      run: function() {
        this.result.push('running');
        return this;
      },
      swim: function() {
        this.result.push('swimming');
        return this;
      },
      sleep: function() {
        this.result.push('sleeping');
        return this;
      },
      exec: function() {
        console.log(this.result.join(', '));
        return this;
      }
    }
  }

  const user = makeUser();
  user.sleep().swim().speak().jump().swim().sleep().run().run().exec()
