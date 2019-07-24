var Words =[
    'their',
    'would',
    'about',
    'think',
    'magician',
    'necromancian',
    'apple',
    'fruit',
    'game',
    'player',
    'facny',
    'leticia',
    'name',
    'love',
    'house',
    'canada',
    'school',
    'over',
    'summer',
    'beach',
    'university',
    'college',
    'move',
    'workout',
    'sport',
    'work',
    'stamina',
    'traval',
    'instagram',
    'life',
    'heart',
    'human',
    'car',
    'cat',
    'study',
    'code',
    'developer',
    'sleep',
    'eat'
]

function randomWord(){
    return Words[Math.floor(Math.random()* Words.length)]
}

export {randomWord}