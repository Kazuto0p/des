const urlParams = new URLSearchParams(window.location.search);
const mobileId = urlParams.get('id');

async function previewLoad() {
  try {
    const response = await fetch(`/api/preview/${mobileId}`);
    const data = await response.json();

    let str = "";

    if (Array.isArray(data.color)) {
      data.color.forEach(item => {
        str += `${item.color} Quantity ${item.qty}, `;
      });
    } else if (typeof data.color === "object" && data.color !== null) {
      for (const key in data.color) {
        str += `${key} Quantity ${data.color[key]}, `;
      }
    } else if (typeof data.color === "string") {
      str = data.color;
    } else {
      str = "N/A";
    }

    let container = document.getElementById('preview-container');

    container.innerHTML = `
      <div class="thumbnail-section">
        <img src="${data.image_arr[0]}" class="thumb-img" alt="Thumb 1">
        <img src="${data.image_arr[1]}" class="thumb-img" alt="Thumb 2">
        <img src="${data.image_arr[2]}" class="thumb-img" alt="Thumb 3">
      </div>
      
      <div class="image-section">
        <img src="${data.image_arr[0]}" alt="Mobile Image" id="preview-image">
      </div>

      <div class="details-section">
        <h2 id="preview-name">${data.name}</h2>
        <p class="brand"><strong>Brand:</strong> ${data.brand}</p>
        <p class="specs"><strong>RAM:</strong> ${data.ram} | <strong>ROM:</strong> ${data.rom}</p>
        <p class="colors"><strong>Available Colors:</strong> ${str.slice(0, -2)}</p>
        <p class="price" id="preview-price">₹${data.price || '79,999'}</p>

        <div class="buttons">
          <button class="buy-btn">Buy Now</button>
          <button class="cart-btn"><i class="fas fa-cart-plus"></i> Add to Cart</button>
        </div>
      </div>
    `;

    // Thumbnail hover swap
    document.querySelectorAll('.thumb-img').forEach(img => {
      img.addEventListener('mouseenter', () => {
        document.getElementById('preview-image').src = img.src;
      });
    });

  } catch (error) {
    console.error(error);
  }
}

previewLoad();

async function delete_data(id) {
  try {
    const response = await fetch(`/api/delete/${id}`);
    const data = await response.json();

    if (response.status === 200) {
      alert("Data Deleted Successfully");
      window.location.href = "/";
    }
  } catch (err) {
    alert("Unable to delete data, server error");
    console.error(err);
  }
}
