jQuery(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: `<button type="button" class="slider__arrow slick-prev">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve">
                            <g>
                                <g>
                                    <path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8
                                        c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712
                                        L143.492,221.863z"/>
                                </g>
                            </g>
                        </svg>
                    </button>`,
        nextArrow: `<button type="button" class="slider__arrow slick-next">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="792.033px" height="792.033px" viewBox="0 0 792.033 792.033" style="enable-background:new 0 0 792.033 792.033;" xml:space="preserve">
                            <g>
                                <g id="_x38_">
                                    <g>
                                        <path d="M617.858,370.896L221.513,9.705c-13.006-12.94-34.099-12.94-47.105,0c-13.006,12.939-13.006,33.934,0,46.874
                                            l372.447,339.438L174.441,735.454c-13.006,12.94-13.006,33.935,0,46.874s34.099,12.939,47.104,0l396.346-361.191
                                            c6.932-6.898,9.904-16.043,9.441-25.087C627.763,386.972,624.792,377.828,617.858,370.896z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>`
        
    });
});