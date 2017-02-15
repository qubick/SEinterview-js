var assert = require('assert')
    ,should = require('should')
    ,fileExist = require('file-exists')

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5))
      // [1,2,3].indexOf(5).should.equal(-1)
      // [2,3,5,6].indexOf(0).should.equal(1)
    })

    foundfile = fileExist('./test.js')
    foundfile.should.be.eql(true)
    // it('should return 1 when the value is present', function(){
    //   assert.eqaul(1, [1,2,3].indexOf(2))
    // })
  })
})


describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(err){
      var user = new User('Luna')
      user.save(function(err){
        if(err)
          done(err)
        else
          done()
      })
    })
  })
});

// beforeEach(function(){
//   return db.clear()
//     .then(function(){
//       return db.save([tobi, loki, jane]);
//     })
// });
//
// describe('#find()', function(){
//   it('respond with matching records', function(){
//     return
//       db.find({type: 'User'}).should.eventually.have.length(3)
//   })
// })

it('should complete this test', function(done){
  return new Promise(function (resolve){
    assert.ok(true)
    resolve()
  })
    .then(done)
})

function User(value){
  this.data = value
  this.save = function(){
    ;
  }
}
