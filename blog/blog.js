// buat variable untuk menampung data blog di dalam array kosong
let blogs = [];

// fungsi
function addBlog(event){
    event.preventDefault();
    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image");

    image = URL.createObjectURL(image.files[0]); //untuk mengambil data gambar

    const blog = {
        blogTitle: title,
        blogContent: content,
        blogImage: image,
        author: "John Doe",
    };

    // push: method untuk nambahi data baru ke dalam array
    blogs.push(blog);

    // console.log(blogs);

    renderBlog();
}

function renderBlog(){
    //akses elemen dangan id contents
    let contentContainer = document.getElementById('contents');

    contentContainer.innerHTML = ""; //inject/menyisipkan elemen html

    // looping tiap data di array(blogs) dan render dataya ke html
    for(let i = 0; i < blogs.length; i++){
        contentContainer.innerHTML += `
        
            <div class="blog-list-item">
                <div class="blog-image">
                    <img src="${blogs[i].blogImage}" alt="blog image">
                </div>
                <div class="blog-content">
                    <h1>${blogs[i].blogTitle}</h1>
                    <span>26 Nov 2024 09:00 | Dimas Sulaksono </span>
                    <p>${blogs[i].blogContent}</p>
                </div>
            </div>
        
        `
    }
}