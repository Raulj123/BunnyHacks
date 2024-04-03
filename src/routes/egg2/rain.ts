export function createRaindrop(): void {
	const raindrop = document.createElement('div');
	raindrop.classList.add('raindrop');

	const size = Math.random() * 2 + 1; // More variability in size
	raindrop.style.width = `${size}px`;
	raindrop.style.height = `${size * 10}px`; // Keeping the aspect ratio according to size
	raindrop.style.left = `${Math.random() * window.innerWidth}px`;
	raindrop.style.animationDuration = `${Math.random() * 2 + 1}s`;
	raindrop.style.opacity = `${Math.random() * 0.5 + 0.5}`;
	raindrop.style.transform = `scale(${Math.random()})`;

	// Wind effect
	const wind = Math.random() > 0.5 ? 1 : -1;
	raindrop.style.animationName = 'fall';
	raindrop.style.animationTimingFunction = 'linear';
	raindrop.style.animationIterationCount = 'infinite';
	raindrop.style.transform = `translateX(${wind * 10 * Math.random()}px)`;

	const rainElement = document.getElementById('rain');
	if (rainElement) {
		rainElement.appendChild(raindrop);
	} else {
		console.error("Element with id 'rain' not found.");
	}

	setTimeout(() => {
		raindrop.remove();
	}, 2000); // Remove raindrop after it falls
}

// This approach is less recommended due to potential for side effects
// within the function. Consider separating styles from the component.
function addFallKeyframe(): void {
	const wind = Math.random() > 0.5 ? 1 : -1;
	const styleSheet = document.styleSheets[0];
	const rule = `@keyframes fall { to { transform: translateY(100vh) translateX(${wind * 10 * Math.random()}px); } }`;
	styleSheet.insertRule(rule, 0);
}
