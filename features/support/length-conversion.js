const {Given,When,Then} = require('cucumber')
const assert = require('assert')
const sleep = require('system-sleep')

let result

Given('I have a unit converter', function () {
   result = 0
   sleep(100)
})

When('I convert {float} centimetre to inch', function (centimetre) {
  result = centimetre * 0.39370079
  sleep(200)
})

When('I convert {float} inch to centimetre', function (inch) {
  result = inch * 2.54
  sleep(200)
})

Then('the result must be {float} inch', function (inch) {
  assert.equal(result, inch)
  sleep(300)
})

Then('the result must be {float} centimetre', function (centimetre) {
  assert.equal(result, centimetre)
})
