    // بيانات أصدقاء تجريبية
    const friends = [
      { name: "كريم", img: "https://i.pravatar.cc/80?img=1", status: "online" },
      { name: "محمد", img: "https://i.pravatar.cc/80?img=2", status: "offline" },
      { name: "سارة", img: "https://i.pravatar.cc/80?img=3", status: "online" },
      { name: "يوسف", img: "https://i.pravatar.cc/80?img=4", status: "online" },
      { name: "نور", img: "https://i.pravatar.cc/80?img=5", status: "offline" },
      { name: "هند", img: "https://i.pravatar.cc/80?img=6", status: "online" }
    ];

    const container = document.getElementById("friendsList");

    friends.forEach((friend) => {
      const card = document.createElement("div");
      card.className = "friend-card";
      card.innerHTML = `
        <img src="${friend.img}" alt="${friend.name}">
        <div class="friend-name">${friend.name}</div>
        <div class="status ${friend.status}">${friend.status === "online" ? "متصل الآن" : "غير متصل"}</div>
        <button class="action-btn">إضافة صديق</button>
      `;
      container.appendChild(card);

      const btn = card.querySelector(".action-btn");
      btn.addEventListener("click", () => {
        if (btn.textContent === "إضافة صديق") {
          btn.textContent = "إلغاء الصداقة";
          btn.classList.add("remove");
        } else {
          btn.textContent = "إضافة صديق";
          btn.classList.remove("remove");
        }
      });
    });

    // Dark Mode
    const toggle = document.getElementById("themeToggle");
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });