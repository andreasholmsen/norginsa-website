document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("templateListContent");
  container.innerHTML = ''; // Clear container before loading

  try {
    const res = await fetch("arkiv/templates.json");
    const data = await res.json();

    // Show only top 3 templates (featured)
    const topTemplates = data.templates.slice(0, 3);

    topTemplates.forEach((template, index) => {
      const card = document.createElement("article");
      card.setAttribute("tabindex", "0");
      card.className =
        "bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-red-400 dark:focus:ring-red-600 flex flex-col overflow-hidden max-w-sm mx-auto opacity-0 animate-fadeIn";
      card.style.animationDelay = `${index * 150}ms`;

      card.innerHTML = `
        <img src="${template.previewImage}" alt="${template.name} preview" loading="lazy" class="w-full h-56 object-cover rounded-t-2xl"/>
        <div class="p-6 flex flex-col flex-grow">
          <h3 class="text-2xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2">${template.name}</h3>
          <p class="text-gray-700 dark:text-gray-300 text-sm mb-5 flex-grow line-clamp-3">${template.description}</p>
          <div class="flex flex-wrap gap-2 mb-5" aria-label="Tags">
            ${template.tags.map(tag => `<span class="bg-red-100 dark:bg-red-700 text-red-700 dark:text-red-100 text-xs font-semibold px-3 py-1 rounded-full select-none">${tag}</span>`).join('')}
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mb-5 truncate" aria-label="By author, created date and license">
            By <strong>${template.author}</strong> · ${template.created} · <span class="capitalize">${template.license}</span>
          </p>
          <div class="mt-auto space-y-3">
            <a href="${template.liveUrl}" target="_blank" rel="noopener noreferrer" class="block w-full bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white text-center px-5 py-3 rounded-xl font-semibold shadow-lg transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400" aria-label="Explore ${template.name} live demo">
              🚀 Explore
            </a>
            <a href="${template.sourceUrl}" target="_blank" rel="noopener noreferrer" class="block text-center text-red-600 dark:text-red-400 underline hover:text-red-800 dark:hover:text-red-300 text-sm transition focus:outline-none focus:ring-2 focus:ring-red-400 rounded" aria-label="View ${template.name} source code">
              📦 Source Code
            </a>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  } catch (err) {
    container.innerHTML = `<p class="text-red-500 text-center py-6 font-semibold">Failed to load templates. Please try again later.</p>`;
    console.error("Error loading template data:", err);
  }
});

/* Fade-in animation */
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease forwards;
  }
`;
document.head.appendChild(style);
