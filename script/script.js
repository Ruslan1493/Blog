function redirect(page) {
    if (page === 'strength') {
        location.href = "{{ site.baseurl }}/pages/strength.html";
    } else if (page === 'fat loss') {
        location.href = "{{ site.baseurl }}/pages/fat_loss.html";
    } else if (page === 'condition') {
        location.href = "../pages/conditioning.html";
    }
};




