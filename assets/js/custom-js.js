// floating icons
    
    anime({
        targets: '#floating-kubernetes',
        translateY: [
            { value: -20, duration: 2000, easing: 'easeInOutSine' },
            { value: 0, duration: 2000, easing: 'easeInOutSine' }
        ],
        rotate: [
            { value: '15deg', duration: 2500, easing: 'easeInOutSine' }, // Rotate to 15 degrees
            { value: '0deg', duration: 2500, easing: 'easeInOutSine' }   // Rotate back to original position
        ],
        loop: true,
        direction: 'alternate'
    });


    anime({
        targets: '#floating-aws',
        // translateX: [
        //     { value: 100, duration: 1000, easing: 'easeInOutSine' }, // Move right by 100 pixels
        //     { value: -50, duration: 1000, easing: 'easeInOutSine' }    // Move back to original position
        // ],
        translateY: [
            { value: -20, duration: 3000, easing: 'easeInOutSine' }, // Move up by 20 pixels
            { value: 0, duration: 3000, easing: 'easeInOutSine' }    // Move back down to original position
        ],
        rotate: [
            { value: '15deg', duration: 2500, easing: 'easeInOutSine' }, // Rotate to 15 degrees
            { value: '0deg', duration: 2500, easing: 'easeInOutSine' }   // Rotate back to original position
        ],
        loop: true,
        direction: 'alternate'
    });


    anime({
        targets: '#floating-azure',
        translateY: [
            { value: -20, duration: 3500, easing: 'easeInOutSine' },
            { value: 0, duration: 3500, easing: 'easeInOutSine' }
        ],
        rotate: [
            { value: '-15deg', duration: 3000, easing: 'easeInOutSine' }, // Rotate to 15 degrees
            { value: '0deg', duration: 3000, easing: 'easeInOutSine' }   // Rotate back to original position
        ],
        loop: true,
        direction: 'alternate'
    });


    anime({
        targets: '#floating-docker',
        // translateX: [
        //     { value: 100, duration: 1000, easing: 'easeInOutSine' }, // Move right by 100 pixels
        //     { value: -50, duration: 1000, easing: 'easeInOutSine' }    // Move back to original position
        // ],
        translateY: [
            { value: -20, duration: 3000, easing: 'easeInOutSine' }, // Move up by 20 pixels
            { value: 0, duration: 3000, easing: 'easeInOutSine' }    // Move back down to original position
        ],
        rotate: [
            { value: '-15deg', duration: 4000, easing: 'easeInOutSine' }, // Rotate to 15 degrees
            { value: '0deg', duration: 4000, easing: 'easeInOutSine' }   // Rotate back to original position
        ],
        loop: true,
        direction: 'alternate'
    });


    anime({
        targets: '#floating-terraform',
        // translateX: [
        //     { value: 100, duration: 1000, easing: 'easeInOutSine' }, // Move right by 100 pixels
        //     { value: -50, duration: 1000, easing: 'easeInOutSine' }    // Move back to original position
        // ],
        translateY: [
            { value: -20, duration: 4000, easing: 'easeInOutSine' }, // Move up by 20 pixels
            { value: 0, duration: 4000, easing: 'easeInOutSine' }    // Move back down to original position
        ],
        rotate: [
            { value: '-15deg', duration: 3500, easing: 'easeInOutSine' }, // Rotate to 15 degrees
            { value: '0deg', duration: 3500, easing: 'easeInOutSine' }   // Rotate back to original position
        ],
        loop: true,
        direction: 'alternate'
    });

