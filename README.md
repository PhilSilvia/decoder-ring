# Decoder-Ring project

A web application that can both encrypt and decrypt messages using the Caesar Shift, Polybius Square, and Substition methods. 

# Context

Sometimes you need to encrypt a message, whether it is to pass secrets to your peers or give a simply encoded message to your players for a D&D game. This is meant to assist in doing so quickly and easily. Alternatively, it can be used to try out different methods for decrypting a message when you're not sure how it was encrypted. 

# Features

Offers the use of three different encryption protocols:

* Caesar Shift, where each character is shifted a consistent number of spaces to the left or right. https://en.wikipedia.org/wiki/Caesar_cipher
* Polybius Square, where each character is on a 5x5 square and is encrypted into a series of two-digit numbers based on the character's position in that square. https://en.wikipedia.org/wiki/Polybius_square
* Substituion, where you provide a string of characters corresponding to the letters in the alphabet and directly substitute each character with the character from the substitution string. https://en.wikipedia.org/wiki/Substitution_cipher

The code is robust enough to handle certain edge cases and invalid ciphers gracefully. 

# Technology
Built using a combination of HTML and Javascript. 
