
var revapi4,
    tpj;    
(function() {            
    if (!/loaded|interactive|complete/.test(document.readyState)) document.addEventListener("DOMContentLoaded",onLoad)
        else
    onLoad();
    function onLoad() {                
        if (tpj===undefined) {
            tpj = jQuery;
            if("off" == "on") tpj.noConflict();        
        }

        // Slider No

        if(tpj("#rev_slider_1_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1_1");
				}else{
					revapi1 = tpj("#rev_slider_1_1").show().revolution({
						sliderType:"standard",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
                        navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                            onHoverStop:"off",
                            bullets: {
                                enable:true,
                                hide_onmobile:true,
                                hide_under:500,
                                style:"custom-dots-vertical",
                                hide_onleave:false,
                                direction:"vertical",
                                h_align:"right",
                                v_align:"center",
                                h_offset:30,
                                v_offset:0,
                                space:5,
                                tmp:'<span class="tp-bullet-title d-none"></span>'
                            }
                        },
						visibilityLevels:[1240,1024,778,480],
						gridwidth:1240,
						gridheight:868,
						lazyType:"all",
						parallax: {
							type:"mouse+scroll",
							origo:"enterpoint",
							speed:400,
                          speedbg:0,
                          speedls:0,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"spinner4",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
    }; /* END OF revapi call */
        
        
    if(tpj("#rev_slider_2_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_2_1");
				}else{
					revapi2 = tpj("#rev_slider_2_1").show().revolution({
						sliderType:"standard",
						sliderLayout:"fullwidth",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
                            keyboardNavigation:"off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation:"off",
                            mouseScrollReverse:"default",
                            onHoverStop:"off",
                            bullets: {
                                enable:true,
                                hide_onmobile:true,
                                hide_under:500,
                                style:"custom-dots-vertical",
                                hide_onleave:false,
                                direction:"vertical",
                                h_align:"right",
                                v_align:"center",
                                h_offset:30,
                                v_offset:0,
                                space:5,
                                tmp:'<span class="tp-bullet-title d-none"></span>'
                            }
                        },
						visibilityLevels:[1240,1024,778,480],
						gridwidth:1240,
						gridheight:868,
						lazyType:"none",
						parallax: {
							type:"mouse+scroll",
							origo:"enterpoint",
							speed:400,
                          speedbg:0,
                          speedls:0,
							levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
						},
						shadow:0,
						spinner:"spinner0",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
    }; /* END OF revapi call */    
        
    if(tpj("#rev_slider_4_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_4_1");
    }else{
        revapi4 = tpj("#rev_slider_4_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical",
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"all",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */    
        
    if(tpj("#rev_slider_5_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_5_1");
    }else{
        revapi5 = tpj("#rev_slider_5_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical",
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"none",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */    
    
    if(tpj("#rev_slider_6_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_6_1");
    }else{
        revapi6 = tpj("#rev_slider_6_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical",
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"all",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner4",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */    
    
        
    if(tpj("#rev_slider_7_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_7_1");
    }else{
        revapi7 = tpj("#rev_slider_7_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical",
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"none",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */    
        
    if(tpj("#rev_slider_8_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_8_1");
    }else{
        revapi8 = tpj("#rev_slider_8_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical", 
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"none",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */    
        
    if(tpj("#rev_slider_9_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_9_1");
    }else{
        revapi9 = tpj("#rev_slider_9_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"auto",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical", 
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"none",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */    
        
    if(tpj("#rev_slider_10_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_10_1");
    }else{
        revapi10 = tpj("#rev_slider_10_1").show().revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:500,
                    style:"custom-dots-vertical", 
                    hide_onleave:false,
                    direction:"vertical",
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0,
                    space:5,
                    tmp:'<span class="tp-bullet-title d-none"></span>'
                }
            },
            visibilityLevels:[1240,1024,778,480],
            gridwidth:1240,
            gridheight:868,
            lazyType:"none",
            parallax: {
                type:"mouse+scroll",
                origo:"enterpoint",
                speed:400,
              speedbg:0,
              speedls:0,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"spinner0",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }; /* END OF revapi call */  
        
        
        
    }; /* END OF ON LOAD FUNCTION */
}()); /* END OF WRAPPING FUNCTION */

$(window).load(function(){
    $('.custom-dots-vertical .tp-bullet').each(function(){
        var $this = $(this),
            $index = $this.index();
        $this.append('0' + ($index+1));
    });
});



