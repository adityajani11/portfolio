AOS.init({
  duration: 1000,
  once: true
});


// For opening models
document.querySelectorAll('.open-project-modal').forEach(button => {
  button.addEventListener('click', () => {
    const title = button.getAttribute('data-title');
    const description = button.getAttribute('data-description');
    const features = button.getAttribute('data-features').split(',');
    const technologies = button.getAttribute('data-technologies').split(',');

    document.getElementById('dynamicModalTitle').textContent = title;
    document.getElementById('dynamicModalDescription').textContent = description;

    const featureList = document.getElementById('dynamicModalFeatures');
    featureList.innerHTML = '';
    features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f.trim();
      featureList.appendChild(li);
    });

    const technologiesList = document.getElementById('dynamicModalTechnologies');
    technologiesList.innerHTML = '';
    technologies.forEach(tech => {
      const li = document.createElement('li');
      li.className = 'list-inline-item badge bg-secondary me-1';
      li.textContent = tech.trim();
      technologiesList.appendChild(li);
    });

    const modal = new bootstrap.Modal(document.getElementById('dynamicProjectModal'));
    modal.show();
  });
});