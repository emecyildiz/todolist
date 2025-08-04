// UI işlemleri için fonksiyonlar

// Tamamlanan görevleri gizle/göster toggle butonu oluştur
export function createToggleButton() {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Tamamlananları Gizle";
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.id = "toggle-completed";
    
    // Butonun konumunu ayarla
    const todolist = document.querySelector(".todolist");
    todolist.insertBefore(toggleBtn, todolist.querySelector(".list"));
    
    return toggleBtn;
}

// Tamamlanan görevleri gizle/göster fonksiyonu
export function toggleCompletedTasks() {
    const toggleBtn = document.getElementById("toggle-completed");
    let isHidden = false;
    
    toggleBtn.addEventListener("click", function() {
        // Her tıklamada güncel tamamlanan görevleri bul
        const completedTasks = document.querySelectorAll(".line");
        
        completedTasks.forEach(task => {
            // Label'ın parent div'ini bul (tüm todo item'ı)
            const todoDiv = task.closest('.div-css');
            
            if (isHidden) {
                // Göster
                todoDiv.style.display = "flex";
                toggleBtn.textContent = "Tamamlananları Gizle";
            } else {
                // Gizle
                todoDiv.style.display = "none";
                toggleBtn.textContent = "Tamamlananları Göster";
            }
        });
        isHidden = !isHidden;
    });
}

// Yeni todo eklendiğinde toggle butonunu güncelle
export function updateToggleButton() {
    const toggleBtn = document.getElementById("toggle-completed");
    if (toggleBtn) {
        // Üstü çizili (tamamlanan) görevleri kontrol et
        const completedTasks = document.querySelectorAll(".line");
        if (completedTasks.length > 0) {
            toggleBtn.style.display = "block";
        } else {
            toggleBtn.style.display = "none";
        }
    }
}

// Sayfa yüklendiğinde UI'ı hazırla
export function initializeUI() {
    createToggleButton();
    toggleCompletedTasks();
}
