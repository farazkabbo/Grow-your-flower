// Pixel Flower Garden - Improved Pixel Art Version
// Features: 16x16 detailed pixel art, proper shading, realistic growth stages

const canvas = document.getElementById('flowerCanvas');
const ctx = canvas.getContext('2d');

// Disable anti-aliasing for crisp pixel art
ctx.imageSmoothingEnabled = false;

// Color palette for realistic pixel art
const COLORS = {
    outline: '#000000',
    stem: '#2d5016',
    stemLight: '#4a7c28',
    stemDark: '#1a3009',
    leaf: '#3d6b1a',
    leafLight: '#5d9e2a',
    leafDark: '#1e3d0f',
    soil: '#5d4037',
    soilLight: '#795548',
    pot: '#e74c3c',
    potDark: '#c0392b',
    potLight: '#ff6b6b'
};

// Detailed 16x16 pixel art flowers with proper shading and outlines
const flowerTypes = {
    sunflower: {
        name: 'Sunflower',
        petalColor: '#ffd700',
        petalDark: '#ffb700',
        petalLight: '#ffeb3b',
        centerColor: '#5c4033',
        centerLight: '#8b6914',
        centerDark: '#3d2b1f',
        stages: [
            // Stage 0: Seed (buried in soil)
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            // Stage 1: Sprout emerging
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,2,2,1,1,2,2,0,0,0,0,0],
                [0,0,0,0,0,0,2,1,1,2,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            // Stage 2: Growing stem with leaves
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            // Stage 3: Bud forming at top
            [
                [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            // Stage 4: Starting to bloom
            [
                [0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0],
                [0,0,0,0,3,3,3,4,4,3,3,3,0,0,0,0],
                [0,0,0,0,0,3,4,4,4,4,3,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,2,0,1,0,2,0,0,0,0,0,0],
                [0,0,0,0,2,2,0,1,0,2,2,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            // Stage 5: Fully bloomed sunflower
            [
                [0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],
                [0,0,3,3,4,4,4,4,4,4,4,4,3,3,0,0],
                [0,3,3,4,4,5,5,5,5,5,5,4,4,3,3,0],
                [0,3,4,4,5,5,5,5,5,5,5,5,4,4,3,0],
                [0,3,4,5,5,5,4,4,4,4,5,5,5,4,3,0],
                [0,3,4,5,5,4,4,4,4,4,4,5,5,4,3,0],
                [0,0,3,4,5,5,4,4,4,4,5,5,4,3,0,0],
                [0,0,3,4,5,5,4,4,1,4,5,5,4,3,0,0],
                [0,0,0,3,4,4,4,4,1,4,4,4,3,0,0,0],
                [0,0,0,0,3,3,4,4,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,2,0,0,1,0,0,2,0,0,0,0],
                [0,0,0,0,2,2,2,0,1,0,2,2,2,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
            ]
        ]
    },
    
    rose: {
        name: 'Rose',
        petalColor: '#ff1493',
        petalDark: '#c71585',
        petalLight: '#ff69b4',
        centerColor: '#8b0000',
        centerLight: '#a52a2a',
        centerDark: '#660000',
        stages: [
            // Stage 0-3 similar structure with rose colors...
            // (Keeping same structure but with rose coloring)
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,3,3,3,3,3,0,0,0,0,0,0],
                [0,0,0,0,3,3,4,4,4,3,3,0,0,0,0,0],
                [0,0,0,0,0,3,4,4,4,3,0,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,3,3,3,3,3,3,3,0,0,0,0,0],
                [0,0,0,3,3,4,4,4,4,4,4,3,3,0,0,0],
                [0,0,3,3,4,4,5,5,5,5,5,5,4,3,3,0],
                [0,0,3,4,4,5,5,4,4,4,4,5,5,4,3,0],
                [0,0,3,4,5,5,4,4,4,4,4,4,5,5,4,0],
                [0,0,0,3,4,5,5,4,4,4,4,5,5,4,3,0],
                [0,0,0,3,4,4,5,5,4,4,5,5,4,4,3,0],
                [0,0,0,0,3,4,4,4,4,4,4,4,3,0,0,0],
                [0,0,0,0,0,3,3,4,4,4,4,3,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
            ]
        ]
    },
    
    tulip: {
        name: 'Tulip',
        petalColor: '#ff6347',
        petalDark: '#e5533d',
        petalLight: '#ff8c69',
        centerColor: '#ffd700',
        centerLight: '#ffed4e',
        centerDark: '#daa520',
        stages: [
            // Similar progression with tulip colors (reddish-orange)
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,3,3,3,3,3,3,0,0,0,0,0],
                [0,0,0,0,3,3,4,4,4,4,3,3,0,0,0,0],
                [0,0,0,0,0,3,3,4,4,3,3,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
                [0,0,0,3,3,4,4,4,4,4,4,3,3,0,0,0],
                [0,0,3,3,4,4,5,5,5,5,5,5,4,3,3,0],
                [0,0,3,4,4,5,5,4,4,4,4,5,5,4,4,0],
                [0,0,3,4,5,5,4,4,4,4,4,4,5,5,4,0],
                [0,0,0,3,4,5,5,4,4,4,4,5,5,4,3,0],
                [0,0,0,3,4,4,4,4,4,4,4,4,4,4,3,0],
                [0,0,0,0,3,3,4,4,4,4,4,4,3,3,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
            ]
        ]
    },
    
    daisy: {
        name: 'Daisy',
        petalColor: '#ffffff',
        petalDark: '#e0e0e0',
        petalLight: '#ffffff',
        centerColor: '#ffd700',
        centerLight: '#ffed4e',
        centerDark: '#daa520',
        stages: [
            // White petals with yellow center
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,3,3,3,3,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,0,0,3,3,3,3,3,3,3,3,0,0,0,0],
                [0,0,0,0,3,4,4,4,4,4,4,3,0,0,0,0],
                [0,0,0,0,0,3,4,4,4,4,3,0,0,0,0,0],
                [0,0,0,0,0,3,3,4,4,3,3,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ],
            [
                [0,0,3,3,3,0,0,0,0,0,0,3,3,3,0,0],
                [0,3,3,4,3,3,0,0,0,0,3,3,4,3,3,0],
                [3,3,4,4,4,3,3,0,0,3,3,4,4,4,3,3],
                [3,3,4,4,4,3,3,3,3,3,3,4,4,4,3,3],
                [0,3,3,4,4,4,3,3,3,3,4,4,4,3,3,0],
                [0,0,3,3,4,4,4,4,4,4,4,4,3,3,0,0],
                [0,0,0,3,3,4,4,4,4,4,4,3,3,0,0,0],
                [0,0,0,0,3,3,4,4,4,4,3,3,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,2,0,1,0,2,0,0,0,0,0],
                [0,0,0,0,0,2,2,0,1,0,2,2,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0]
            ]
        ]
    }
};

let currentType = 'sunflower';
let currentStage = 0;
let happiness = 0;
let isAnimating = false;
let pixelSize = 8;
let offsetX = 0;
let offsetY = 0;

// Initialize stars background
function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Create flower selector thumbnails
function createThumbnails() {
    const selector = document.getElementById('selector');
    selector.innerHTML = '';
    
    Object.keys(flowerTypes).forEach((key, index) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'flower-thumb-wrapper';
        
        const thumb = document.createElement('canvas');
        thumb.width = 64;
        thumb.height = 64;
        thumb.className = 'flower-thumb';
        thumb.dataset.type = key;
        if (key === currentType) wrapper.classList.add('active');
        
        const tCtx = thumb.getContext('2d');
        tCtx.imageSmoothingEnabled = false;
        
        // Draw thumbnail at stage 5 (fully grown)
        drawPixelArt(tCtx, flowerTypes[key].stages[5], flowerTypes[key], 4, true);
        
        // Add flower name label
        const label = document.createElement('span');
        label.className = 'flower-label';
        label.textContent = flowerTypes[key].name;
        
        wrapper.appendChild(thumb);
        wrapper.appendChild(label);
        
        wrapper.addEventListener('click', () => selectFlowerType(key));
        selector.appendChild(wrapper);
    });
}

// Main drawing function
function drawPixelArt(context, stageData, flowerInfo, scale = 1, isThumb = false) {
    const canvasWidth = context.canvas.width;
    const canvasHeight = context.canvas.height;
    
    // Clear canvas
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Calculate centering
    const gridSize = 16;
    const pxSize = isThumb ? 4 : 8;
    const totalSize = gridSize * pxSize * scale;
    const startX = (canvasWidth - totalSize) / 2 + (isThumb ? 0 : offsetX);
    const startY = (canvasHeight - totalSize) / 2 + (isThumb ? 0 : offsetY);
    
    // Draw pixel by pixel
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = stageData[row] ? stageData[row][col] : 0;
            if (!cell) continue;
            
            let color;
            let shadowColor = null;
            
            // Determine color based on cell type
            switch(cell) {
                case 1: // Stem
                    color = COLORS.stem;
                    shadowColor = COLORS.stemDark;
                    break;
                case 2: // Leaf
                    color = COLORS.leaf;
                    shadowColor = COLORS.leafDark;
                    break;
                case 3: // Petal main
                    color = flowerInfo.petalColor;
                    shadowColor = flowerInfo.petalDark;
                    break;
                case 4: // Center main
                    color = flowerInfo.centerColor;
                    shadowColor = flowerInfo.centerDark;
                    break;
                case 5: // Center highlight
                    color = flowerInfo.centerLight;
                    shadowColor = flowerInfo.centerColor;
                    break;
                default:
                    continue;
            }
            
            const x = startX + col * pxSize * scale;
            const y = startY + row * pxSize * scale;
            const size = pxSize * scale;
            
            // Draw shadow offset
            if (!isThumb && shadowColor) {
                context.fillStyle = shadowColor;
                context.fillRect(x + 1, y + 1, size - 1, size - 1);
            }
            
            // Draw main pixel
            context.fillStyle = color;
            context.fillRect(x, y, size - 1, size - 1);
            
            // Add highlight for depth (not for thumbnails)
            if (!isThumb && (cell === 3 || cell === 2)) {
                context.fillStyle = 'rgba(255,255,255,0.3)';
                context.fillRect(x, y, size * 0.4, size * 0.4);
            }
        }
    }
    
    // Draw pot if main canvas
    if (!isThumb) {
        drawPot(context, canvasWidth, canvasHeight);
    }
}

function drawPot(context, width, height) {
    const potWidth = 48;
    const potHeight = 32;
    const x = (width - potWidth) / 2;
    const y = height - potHeight - 20;
    
    // Pot shadow
    context.fillStyle = 'rgba(0,0,0,0.3)';
    context.fillRect(x + 4, y + 4, potWidth, potHeight);
    
    // Pot body
    context.fillStyle = COLORS.pot;
    context.fillRect(x, y, potWidth, potHeight);
    
    // Pot rim
    context.fillStyle = COLORS.potLight;
    context.fillRect(x, y, potWidth, 8);
    
    // Pot details
    context.fillStyle = COLORS.potDark;
    context.fillRect(x, y + potHeight - 8, potWidth, 8);
    
    // Soil
    context.fillStyle = COLORS.soil;
    context.fillRect(x + 4, y + 4, potWidth - 8, 8);
    
    // Soil highlight
    context.fillStyle = COLORS.soilLight;
    context.fillRect(x + 4, y + 4, potWidth - 8, 2);
}

function render() {
    const flower = flowerTypes[currentType];
    drawPixelArt(ctx, flower.stages[currentStage], flower, 1, false);
}

function waterFlower() {
    if (isAnimating || currentStage >= 5) return;
    
    isAnimating = true;
    const btn = document.getElementById('waterBtn');
    btn.disabled = true;
    
    // Water drop animation
    createWaterDrops();
    
    // Growth animation
    let bounce = 0;
    const animate = () => {
        bounce += 0.2;
        offsetY = Math.sin(bounce) * 2;
        render();
        
        if (bounce < Math.PI * 3) {
            requestAnimationFrame(animate);
        } else {
            finishGrowth();
        }
    };
    animate();
}

function createWaterDrops() {
    const container = document.getElementById('canvasContainer');
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.className = 'water-drop';
            drop.style.left = (Math.random() * 200 + 60) + 'px';
            drop.style.top = '20px';
            container.appendChild(drop);
            
            let pos = 20;
            const fall = setInterval(() => {
                pos += 8;
                drop.style.top = pos + 'px';
                drop.style.transform = `rotate(-45deg) scale(${1 - pos/200})`;
                
                if (pos > 180) {
                    clearInterval(fall);
                    drop.remove();
                }
            }, 20);
        }, i * 150);
    }
}

function finishGrowth() {
    offsetY = 0;
    currentStage++;
    happiness = Math.min(100, happiness + 20);
    
    updateUI();
    createHeartParticles();
    createSparkles();
    
    if (currentStage >= 5) {
        showMessage("Fully Grown! 🌸");
        document.getElementById('waterBtn').textContent = "Done! ✨";
    } else {
        document.getElementById('waterBtn').disabled = false;
        showMessage(`Stage ${currentStage + 1}! 🌱`);
    }
    
    isAnimating = false;
    render();
}

function createHeartParticles() {
    const container = document.getElementById('canvasContainer');
    const hearts = ['💖', '💕', '💗', '💝', '🌸', '✨'];
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = (Math.random() * 260 + 30) + 'px';
            heart.style.top = (Math.random() * 100 + 80) + 'px';
            heart.style.fontSize = (Math.random() * 10 + 12) + 'px';
            container.appendChild(heart);
            
            setTimeout(() => heart.remove(), 1000);
        }, i * 100);
    }
}

function createSparkles() {
    const container = document.getElementById('canvasContainer');
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const spark = document.createElement('div');
            spark.className = 'sparkle';
            spark.style.left = (Math.random() * 300) + 'px';
            spark.style.top = (Math.random() * 250) + 'px';
            container.appendChild(spark);
            setTimeout(() => spark.remove(), 500);
        }, i * 50);
    }
}

function showMessage(text) {
    const msg = document.getElementById('message');
    msg.textContent = text;
    msg.classList.add('show');
    setTimeout(() => {
        msg.classList.remove('show');
    }, 2000);
}

function updateUI() {
    const stages = ['Seed', 'Sprout', 'Growing', 'Bud', 'Blooming', 'Fully Grown!'];
    const flower = flowerTypes[currentType];
    
    document.getElementById('flowerName').textContent = flower.name;
    document.getElementById('stage').textContent = stages[currentStage];
    document.getElementById('progress').style.width = (currentStage / 5 * 100) + '%';
    document.getElementById('happiness').textContent = happiness;
}

function resetFlower() {
    currentStage = 0;
    happiness = 0;
    isAnimating = false;
    offsetX = 0;
    offsetY = 0;
    
    document.getElementById('waterBtn').disabled = false;
    document.getElementById('waterBtn').textContent = '💧 Water';
    
    updateUI();
    render();
    showMessage("Planting new seed! 🌱");
}

function selectFlowerType(type) {
    currentType = type;
    resetFlower();
    
    // Update thumbnails
    document.querySelectorAll('.flower-thumb-wrapper').forEach(wrapper => {
        wrapper.classList.remove('active');
        if (wrapper.querySelector('.flower-thumb').dataset.type === type) {
            wrapper.classList.add('active');
        }
    });
}

function changeFlowerType() {
    const types = Object.keys(flowerTypes);
    const currentIndex = types.indexOf(currentType);
    const nextIndex = (currentIndex + 1) % types.length;
    selectFlowerType(types[nextIndex]);
}

// Event listeners
document.getElementById('waterBtn').addEventListener('click', waterFlower);
document.getElementById('resetBtn').addEventListener('click', resetFlower);
document.getElementById('changeBtn').addEventListener('click', changeFlowerType);

document.getElementById('canvasContainer').addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
        waterFlower();
    }
});

// Idle animation
let idleTime = 0;
setInterval(() => {
    if (!isAnimating && currentStage < 5) {
        idleTime++;
        if (idleTime > 3) {
            offsetX = Math.sin(idleTime * 0.1) * 0.5;
            render();
        }
    }
}, 100);

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        waterFlower();
    } else if (e.code === 'KeyR') {
        resetFlower();
    } else if (e.code === 'KeyT') {
        changeFlowerType();
    }
});

// Initialize
createStars();
createThumbnails();
render();
updateUI();