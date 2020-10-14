var pageContent = `
<section class="activities-section">
        <h5>TODAY</h5>
        <div class="activities">
            <div class="activity">
                <p><img class="icons icon-check" src="https://img.icons8.com/android/24/000000/checkmark.png"/>
                <p class="text">
                    <span class="bold">Daniel Ugwu</span> mark as done <span class="bold">Listing on Product Hunt so that we can reach as many potential users</span>
                </p>
                <span class="time">8:40 PM</span></p>
            </div>
            <div class="activity activity-comment">
                <div class="activity-text">
                    <p><img class="icons icon-message" src="https://img.icons8.com/android/24/000000/checkmark.png"/>
                        <p class="text">
                            <span class="bold">Chidinma Nwabeke</span> commented on <span class="bold">Account for teams and personal in bottom style</span>
                        </p>
                    <span class="time">7:32 PM</span></p>
                </div>
                <div class="comment">
                    <img class="comment-img" src="../../assets/img/Oval.png" alt="">
                    <p>During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes</p>
                </div>
            </div>
            <div class="activity activity-comment">
                <div class="activity-text">
                    <p><img class="icons icon-download" src="https://img.icons8.com/fluent-systems-regular/24/000000/download.png"/>
                        <p class="text">
                            <span class="bold">Daniel Ugwu</span> uploaded 4 files on <span class="bold">An option to search in current projects or in all projects</span>
                        </p>
                    <span class="time">6:02 PM</span></p>
                </div>
                    <div class="images">
                        <img src="../../assets/img/Image1.png" alt="">
                        <img src="../../assets/img/Image2.png" alt="">
                        <img src="../../assets/img/Image3.png" alt="">
                        <img src="../../assets/img/Image4.png" alt="">
                    </div>
            </div>
        </div>
        <h5>YESTERDAY</h5>
            <div class="activities">
                <div class="activity activity-comment">
                    <div class="activity-text">
                        <p><img class="icons icon-download" src="https://img.icons8.com/fluent-systems-regular/24/000000/download.png"/>
                        <p class="text">
                            <span class="bold">Daniel Ugwu</span> uploaded 4 files on <span class="bold">An option to search in current projects or in all projects</span></span>
                        </p>
                        <span class="time">6:02 PM</span></p>
                    </div>
                    <div class="images">
                        <img src="../../assets/img/Image1.png" alt="">
                        <img src="../../assets/img/Image2.png" alt="">
                        <img src="../../assets/img/Image3.png" alt="">
                        <img src="../../assets/img/Image4.png" alt="">
                    </div>
                </div>
                <div class="activity">
                    <p><img class="icons icon-check" src="https://img.icons8.com/android/24/000000/checkmark.png"/>
                    <p class="text">
                        <span class="bold">Adedeji Bankole</span> mark as done <span class="bold">Listing on Product Hunt so that we can reach as many potential users</span>
                    </p>
                    <span class="time">5:49 PM</span></p>
                </div>
                <div class="activity">
                    <p><img class="icons icon-edit" src="https://img.icons8.com/metro/26/000000/edit.png"/>
                    <p class="text">
                        <span class="bold">Maxwell Diogu</span> edited <span class="bold">Listing on Product Hunt so that we can reach as many potential users</span>
                    </p>
                    <span class="time">6:02 PM</span></p>
                </div>
            </div>
    </section>
`;
function displayPage() {
  document.getElementById("app").innerHTML = pageContent;
}
