*work in progress*

# Bonfire Style Guide

Writing Bonfire challenges is a great way to exercise your own problem solving and testing abilities. It is a simple three step process.

1. Fill out the generator form and test your challenge: http://www.freecodecamp.com/bonfire-challenge-generator
2. Once you have confirmed a working bonfire challenge in the generator, copy and paste the the fields into the JSON generator: http://www.freecodecamp.com/bonfire-json-generator
3. Copy the JSON, fork the freecodecamp repository, and submit a pull request with your addition to the bonfires.json: https://github.com/FreeCodeCamp/freecodecamp/blob/master/seed_data/bonfires.json

## Name

Name your challenge

## Difficulty

Attempt to rate difficulty compared against existing bonfire challenges.

*TODO: add basic quantifiers for each difficulty level*

## Description

Separate paragraphs with a line break. Only the first paragraph is visible prior to a user clicking the "More information" button.

All necessary information must be included in the first paragraph. Write this first paragraph as succinct as possible. Subsequent paragraphs should offer hints or details if needed.

If your subject matter warrants deeper understanding, you may link to Wikipedia.

## Challenge Seed

This is important.

## ~~Challenge Entry Point~~ (deprecated)

*Leave this field blank. It will soon be removed from the generator.*

## Tests

These tests are what bring your challenge to life. Without them, we cannot confirm the accuracy of a user's submitted answer. Choose your tests wisely.

Bonfire tests are written using the [Chai.js](http://chaijs.com/) assertion library. Please use the `should` and `expect` syntax for end user readability. As an example of what not do to, many of the original Bonfire challenges are written with `assert` syntax and many of the test cases are difficult to read.

If your bonfire question has a lot of edge cases, you will need to write many tests for full coverage. If you find yourself writing more tests than you desire, you may consider simplifying the requirements of your bonfire challenge. For difficulty level 1 through 3, you will generally only need 2 to 4 tests.