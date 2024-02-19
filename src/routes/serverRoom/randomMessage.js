const randomMessages = [
    "That might work in another universe, but here, not so much.",
    "Nope, more like a paperclip trying to open a vault. Keep searching!",
    "That key needs a serious gym membership. Not even close, buddy.",
    "Is this your lucky key? Because it's looking pretty unlucky right now.",
    "You're on the right track... except for being completely off track. Try again!",
    "That key wouldn't unlock a locked door in Minecraft, let alone this one.",
    "Maybe you should consult a keyologist about this one. This ain't it.",
    "Cute key! Did you borrow it from your dollhouse? This lock needs something beefier.",
    "Hmm, interesting approach. Unfortunately, it works about as well as a chocolate teapot.",
    "I like your enthusiasm, but that key belongs to a museum exhibit, not this door."
]

export function randomMessage() {
    return randomMessages[Math.floor(Math.random() * randomMessages.length)];
}