// Data Projects
const projects = [
    {
        id: 1,
        title: "Faham Kopi — Coffee Order & Payment Website",
        description: "Website pemesanan kopi untuk layanan take away dan dine in dengan sistem pembayaran fleksibel menggunakan QRIS dan tunai.",
        images: [
            "image/fahamkopi-1.png",
            "image/fahamkopi-2.png",
            "image/fahamkopi-3.png",
            "image/fahamkopi-4.png"
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        fullDescription: "Faham Kopi adalah website pemesanan kopi yang dirancang untuk mempermudah pelanggan dalam melakukan order baik untuk layanan take away maupun dine in. Website ini menyediakan alur pemesanan yang sederhana, tampilan antarmuka yang modern dan responsif, serta mendukung metode pembayaran QRIS dan tunai. Sistem ini membantu operasional coffee shop menjadi lebih efisien dengan mengurangi antrian dan meningkatkan pengalaman pelanggan."
    },
    {
        id: 2,
        title: "Currency Converter — Web Currency App",
        description: "Aplikasi web konversi mata uang Rupiah ke Dollar dan sebaliknya dengan perhitungan real-time.",
        images: [
            "image/currency-1.png",
            "image/currency-2.png",
            "image/currency-3.png"
        ],
        tech: ["Vite.js", "JavaScript", "HTML", "CSS"],
        fullDescription: "Currency Converter App merupakan aplikasi web yang memungkinkan pengguna melakukan konversi mata uang dari Rupiah ke Dollar Amerika maupun sebaliknya secara cepat dan akurat. Aplikasi ini dibangun menggunakan Vite.js untuk performa yang ringan dan cepat, dengan antarmuka yang minimalis dan mudah digunakan. Cocok untuk kebutuhan edukasi, keuangan, maupun penggunaan sehari-hari."
    },
    {
        id: 3,
        title: "CloudSnap — Cloud-Based Image Storage Platform",
        description: "Platform penyimpanan gambar berbasis cloud dengan integrasi API Cloudinary.",
        images: [
            "image/cloudsnap-1.png",
            "image/cloudsnap-2.png",
            "image/cloudsnap-3.png",
            "image/cloudsnap-4.png"
        ],
        tech: ["Node.js", "JavaScript", "Cloudinary API"],
        fullDescription: "CloudSnap adalah aplikasi web penyimpanan gambar berbasis cloud yang memungkinkan pengguna mengunggah, menyimpan, dan mengelola gambar secara online. Aplikasi ini memanfaatkan Cloudinary API untuk penyimpanan dan optimasi gambar, serta dibangun menggunakan Node.js sebagai backend. CloudSnap dirancang untuk memberikan solusi penyimpanan gambar yang aman, scalable, dan efisien."
    },
    {
        id: 4,
        title: "Kohi Cafe — Coffee Shop Management System",
        description: "Sistem manajemen coffee shop untuk pengelolaan menu, produk, karyawan, pesanan, dan invoice.",
        images: [
            "image/kohi-1.png",
            "image/kohi-2.png",
            "image/kohi-3.png",
            "image/kohi-4.png",
            "image/kohi-5.png",
            "image/kohi-6.png",
            "image/kohi-7.png",
            "image/kohi-8.png"
        ],
        tech: ["Java", "MySQL", "PHPMyAdmin"],
        fullDescription: "Kohi Cafe Management System merupakan aplikasi manajemen coffee shop yang terintegrasi dengan database MySQL melalui PHPMyAdmin. Sistem ini memungkinkan pengelolaan kategori menu dan produk, pengaturan role karyawan, pembuatan pesanan, serta pencatatan riwayat pesanan dan invoice. Aplikasi ini dirancang untuk membantu operasional coffee shop menjadi lebih terstruktur, efisien, dan mudah dikelola."
    },
    {
        id: 5,
        title: "Lost and Found — Item Reporting & Management Website",
        description: "Website pelaporan barang hilang dan ditemukan dengan dashboard admin untuk manajemen data dan statistik.",
        images: [
            "image/laf-1.png",
            "image/laf-2.png",
            "image/laf-3.png",
            "image/laf-4.png",
            "image/laf-5.png",
            "image/laf-6.png",
            "image/laf-7.png",
            "image/laf-8.png",
            "image/laf-9.png",
            "image/laf-10.png",
            "image/laf-11.png",
            "image/laf-12.png",
            "image/laf-13.png",
            "image/laf-14.png"
        ],
        tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "PHPMyAdmin"],
        fullDescription: "Lost and Found adalah website yang berfungsi sebagai platform pelaporan barang hilang maupun barang yang ditemukan. Pengguna dapat mengunggah informasi barang, sementara admin memiliki dashboard untuk mengelola data pengguna, barang, serta melihat statistik laporan. Website ini dibangun dengan PHP dan MySQL, serta dirancang dengan antarmuka yang responsif dan mudah digunakan."
    },
    {
        id: 6,
        title: "LaporPam! — Public Service Complaint Website",
        description: "PWebsite pengaduan masyarakat Kecamatan Pamulang untuk berbagai kategori laporan publik.",
        images: [
            "image/lp-1.png",
            "image/lp-2.png",
            "image/lp-3.png",
            "image/lp-4.png",
            "image/lp-5.png",
            "image/lp-6.png",
            "image/lp-7.png",
            "image/lp-8.png",
            "image/lp-9.png",
            "image/lp-10.png",
            "image/lp-11.png",
            "image/lp-12.png",
            "image/lp-13.png",
            "image/lp-14.png",
            "image/lp-15.png",
            "image/lp-16.png"
        ],
        tech: ["PHP", "HTML", "CSS", "JavaScript", "MySQL", "PHPMyAdmin"],
        fullDescription: "LaporPam! adalah website layanan pengaduan masyarakat yang ditujukan untuk Kecamatan Pamulang. Website ini memungkinkan warga melaporkan berbagai permasalahan seperti kebersihan, infrastruktur, keamanan, pelayanan publik, dan lainnya. Sistem ini membantu pihak terkait dalam menerima, mengelola, dan menindaklanjuti laporan secara terstruktur dan transparan."
    },
    {
        id: 7,
        title: "Machine Learning Projects — Data Analysis & Modeling",
        description: "Kumpulan proyek machine learning meliputi regresi, clustering, dan klasifikasi.",
        images: [
            "image/rapidminer-1.png",
            "image/rapidminer-2.png",
            "image/rapidminer-3.png",
            "image/rapidminer-4.png",
            "image/rapidminer-5.png",
            "image/rapidminer-6.png",
        ],
        tech: ["Altair Studio", "RapidMiner", "Machine Learning"],
        fullDescription: "Proyek Machine Learning ini mencakup berbagai metode analisis data dan pemodelan, seperti linear regression, k-means clustering, dan classification. Proyek dikembangkan menggunakan Altair Studio (RapidMiner) untuk melakukan eksplorasi data, preprocessing, pelatihan model, serta evaluasi performa. Proyek ini menunjukkan pemahaman konsep machine learning dan penerapannya pada data nyata."
    }
];

// Current project and image index for modal
let currentProject = null;
let currentImageIndex = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    initializeNavigation();
    initializeModal();
    initializeSmoothScroll();
});

// Load projects into grid
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

// Create project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openModal(project);
    
    const techTags = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    card.innerHTML = `
        <img src="${project.images[0]}" alt="${project.title}" class="project-image">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
        </div>
    `;
    
    return card;
}

// Mobile Navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
    
    prevBtn.onclick = (e) => {
        e.stopPropagation();
        changeImage(-1);
    };
    
    nextBtn.onclick = (e) => {
        e.stopPropagation();
        changeImage(1);
    };
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (modal.style.display === 'flex') {
            if (e.key === 'ArrowLeft') changeImage(-1);
            if (e.key === 'ArrowRight') changeImage(1);
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// Open modal with project details
function openModal(project) {
    currentProject = project;
    currentImageIndex = 0;
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const sliderDots = document.getElementById('sliderDots');
    
    modalTitle.textContent = project.title;
    modalImage.src = project.images[0];
    modalDescription.textContent = project.fullDescription;
    
    // Tech tags
    modalTech.innerHTML = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Create dots
    sliderDots.innerHTML = project.images.map((_, index) => 
        `<span class="dot ${index === 0 ? 'active' : ''}" onclick="goToImage(${index})"></span>`
    ).join('');
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Change image in modal
function changeImage(direction) {
    if (!currentProject) return;
    
    currentImageIndex += direction;
    
    if (currentImageIndex < 0) {
        currentImageIndex = currentProject.images.length - 1;
    } else if (currentImageIndex >= currentProject.images.length) {
        currentImageIndex = 0;
    }
    
    updateModalImage();
}

// Go to specific image
function goToImage(index) {
    currentImageIndex = index;
    updateModalImage();
}

// Update modal image and dots
function updateModalImage() {
    const modalImage = document.getElementById('modalImage');
    const dots = document.querySelectorAll('.dot');
    
    modalImage.style.opacity = '0';
    
    setTimeout(() => {
        modalImage.src = currentProject.images[currentImageIndex];
        modalImage.style.opacity = '1';
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentImageIndex);
        });
    }, 200);
}

// Smooth scroll
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
setTimeout(() => {
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });
}, 100);