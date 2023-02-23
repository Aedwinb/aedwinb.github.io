(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    return i(g);
    function i(p, q) {
        switch (p) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['startsWith']('photo'))
                        x = this['getByClassName']('PhotoPlayList');
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var B = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (B) {
                            w = B[0x1];
                            switch ('quiz.' + B[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var C = this['get']('data')['quiz'];
                        if (C) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, G[I]['id'], s), this);
                                        }
                                    } else {
                                        C['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    C['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var L = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var E = this['get']('data')['quizConfig'];
                                        var G = E['objectives'];
                                        for (var I = 0x0, K = G['length']; I < K; ++I) {
                                            L += C['getObjective'](G[I]['id'], s);
                                        }
                                    } else {
                                        L = C['getObjective'](w, s);
                                    }
                                } else {
                                    L = C['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        L += 0x1;
                                }
                                return L;
                            } catch (M) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var N = this['get']('data');
        N['updateText'](N['translateObjs'][f]);
    }
    function k(O) {
        var P = O['data']['nextSelectedIndex'];
        if (P >= 0x0) {
            var Q = O['source']['get']('items')[P];
            var R = function () {
                Q['unbind']('begin', R, this);
                j['call'](this);
            };
            Q['bind']('begin', R, this);
        }
    }
    function l(S) {
        return function (T) {
            if (S in T) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(U, V) {
        return function (W, X) {
            if (U == W && V in X) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(Y, Z, a0) {
        for (var a1 = 0x0; a1 < Y['length']; ++a1) {
            var a2 = Y[a1];
            var a3 = a2['get']('selectedIndex');
            if (a3 >= 0x0) {
                var a4 = Z['split']('.');
                var a5 = a2['get']('items')[a3];
                if (a0 !== undefined && !a0['call'](this, a5))
                    continue;
                for (var a6 = 0x0; a6 < a4['length']; ++a6) {
                    if (a5 == undefined)
                        return '';
                    a5 = 'get' in a5 ? a5['get'](a4[a6]) : a5[a4[a6]];
                }
                return a5;
            }
        }
        return '';
    }
    function o(a7, a8) {
        var a9 = a8['get']('player');
        return a9 !== undefined && a9['get']('viewerArea') == a7;
    }
}
var script = {"layout":"absolute","height":"100%","backgroundColorRatios":[0],"start":"this.init()","data":{"history":{},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player855","textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"pitch":1}},"propagateClick":false,"scrollBarColor":"#000000","width":"100%","scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"backgroundColor":["#FFFFFF"],"minWidth":0,"gap":10,"hash": "3c147d7fb9eb4efaee058f0fd3a0bcda02c24c64843000f655a81a833b6b79a8", "definitions": [{"id":"ImageResource_6E9BFCA9_7D8B_D4FE_41D1_6B280688D1D8","class":"ImageResource","levels":["this.imlevel_6E83DACC_7D8B_DCB6_41D1_09723A35F281","this.imlevel_6E83CACC_7D8B_DCB6_41CE_317C613353DF"]},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_7644FD7C_7D41_1803_41DA_533F3026C51E"},{"vfov":180,"label":trans('panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08.label'),"overlays":["this.overlay_6C3A9A6D_7D5F_181D_41C1_43F61C1D3A1B","this.popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C","this.overlay_72F7D52D_7D8C_55F7_41CF_74826A09BDF9","this.overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E"],"data":{"label":"Neo Jakarta_0-A"},"thumbnailUrl":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_t.jpg","adjacentPanoramas":[{"select":"this.overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C","yaw":6.69,"class":"AdjacentPanorama","distance":10.54,"backwardYaw":179.98,"data":{"overlayID":"overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E"}}],"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2560,"width":15360,"rowCount":5,"tags":"ondemand","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel"},{"height":1536,"width":9216,"rowCount":3,"tags":"ondemand","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel"},{"height":1024,"width":6144,"rowCount":2,"tags":"ondemand","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel"},{"height":512,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel"},{"height":2048,"width":12288,"rowCount":1,"tags":"mobilevr2gen","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/vr2gen/0.jpg","colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"hfovMax":130,"class":"Panorama","hfov":360,"id":"panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08"},{"id":"ImageResource_696EC218_7DFC_AFDE_41D7_32F00494D399","class":"ImageResource","levels":["this.imlevel_6929303B_7DFC_ABD2_41D2_612E9671979E","this.imlevel_6929203B_7DFC_ABD2_41CF_6101937C370C","this.imlevel_692ED03B_7DFC_ABD2_41DF_6531FA8BFA30"]},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","mode":"quality","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"subtitlesTextShadowColor":"#000000","progressBarBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"subtitlesTop":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"propagateClick":false,"data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","progressBorderRadius":2,"id":"MainViewer","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"progressBackgroundColor":["#000000"],"subtitlesFontFamily":"Arial","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBorderSize":0,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","playbackBarLeft":0,"class":"ViewerArea","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"playbackBarHeight":10,"playbackBarHeadShadowColor":"#000000","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"width":"100%","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","toolTipPaddingTop":4,"progressOpacity":0.7,"progressBorderColor":"#000000","playbackBarHeadWidth":6,"minHeight":50,"playbackBarProgressBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"minWidth":100,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorDirection":"horizontal","subtitlesBottom":50,"playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"progressBottom":10,"subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipFontFamily":"Arial","toolTipPaddingRight":6,"progressHeight":2,"playbackBarHeadBorderRadius":0,"playbackBarRight":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"playbackBarBorderSize":0,"progressBorderSize":0},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_77B81D7A_7D41_1807_41C3_1BC447E2A14E"},{"id":"popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C","class":"PopupPanoramaOverlay","popupMaxWidth":"100%","hideDuration":500,"popupMaxHeight":"100%","showDuration":500,"pitch":17.52,"image":"this.ImageResource_696EC218_7DFC_AFDE_41D7_32F00494D399","popupDistance":100,"yaw":58.11,"hfov":7.03,"showEasing":"cubic_in","hideEasing":"cubic_out"},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_camera","media":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_camera","media":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList"},{"id":"popup_693BE66E_7DF5_B472_41AD_27CD00A02AC9","class":"PopupPanoramaOverlay","popupMaxWidth":"100%","hideDuration":500,"popupMaxHeight":"100%","showDuration":500,"pitch":-11.82,"image":"this.ImageResource_6E9BFCA9_7D8B_D4FE_41D1_6B280688D1D8","popupDistance":100,"yaw":9.12,"hfov":8.55,"showEasing":"cubic_in","hideEasing":"cubic_out"},{"vfov":180,"label":trans('panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C.label'),"overlays":["this.overlay_6C2CE3C3_7D41_0805_4166_F560806526EB","this.overlay_69AE73E2_7DF4_6C72_41CC_8AF737C809E2","this.popup_693BE66E_7DF5_B472_41AD_27CD00A02AC9","this.overlay_69F1E02A_7DF4_6BF2_41B1_7019F9356876"],"data":{"label":"Neo Jakarta_0-B"},"thumbnailUrl":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_t.jpg","adjacentPanoramas":[{"select":"this.overlay_6C2CE3C3_7D41_0805_4166_F560806526EB.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08","yaw":179.98,"class":"AdjacentPanorama","distance":13.96,"backwardYaw":6.69,"data":{"overlayID":"overlay_6C2CE3C3_7D41_0805_4166_F560806526EB"}}],"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2560,"width":15360,"rowCount":5,"tags":"ondemand","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel"},{"height":1536,"width":9216,"rowCount":3,"tags":"ondemand","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel"},{"height":1024,"width":6144,"rowCount":2,"tags":"ondemand","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel"},{"height":512,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel"},{"height":2048,"width":12288,"rowCount":1,"tags":"mobilevr2gen","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/vr2gen/0.jpg","colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"hfovMax":130,"class":"Panorama","hfov":360,"id":"panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C"},{"visible":false,"left":0,"right":0,"propagateClick":false,"data":{"name":"UIComponent18729"},"minHeight":0,"backgroundColorRatios":[0],"backgroundColor":["#000000"],"minWidth":0,"top":0,"bottom":0,"showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"class":"UIComponent","id":"veilPopupPanorama","backgroundOpacity":0.55},{"visible":false,"left":0,"right":0,"propagateClick":false,"data":{"name":"ZoomImage18730"},"minHeight":0,"backgroundColorRatios":[],"backgroundColor":[],"minWidth":0,"scaleMode":"custom","top":0,"bottom":0,"class":"ZoomImage","id":"zoomImagePopupPanorama"},{"visible":false,"fontColor":"#FFFFFF","right":10,"propagateClick":false,"data":{"name":"CloseButton18731"},"fontFamily":"Arial","iconLineWidth":2,"pressedIconColor":"#888888","minHeight":0,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"iconHeight":"100%","minWidth":0,"iconWidth":"100%","borderColor":"#000000","top":10,"layout":"horizontal","fontSize":"1.29vmin","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"iconColor":"#000000","rollOverIconColor":"#666666","class":"CloseButton","id":"closeButtonPopupPanorama","backgroundColorRatios":[0,0.09803921568627451,1]},{"url":trans('imlevel_6E83DACC_7D8B_DCB6_41D1_09723A35F281.url'),"class":"ImageResourceLevel","height":577,"id":"imlevel_6E83DACC_7D8B_DCB6_41D1_09723A35F281","width":1024},{"url":trans('imlevel_6E83CACC_7D8B_DCB6_41CE_317C613353DF.url'),"class":"ImageResourceLevel","height":288,"id":"imlevel_6E83CACC_7D8B_DCB6_41CE_317C613353DF","width":512},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_7644FD7C_7D41_1803_41DA_533F3026C51E"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"rollOverDisplay":true,"maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"pitch":17.52,"image":{"class":"ImageResource","levels":[{"height":514,"width":150,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_HS_0d7x2dw4.png","class":"ImageResourceLevel"}]},"yaw":58.11,"hfov":7.03,"vfov":23.75}],"areas":["this.HotspotPanoramaOverlayArea_6C3FBA72_7D5F_1807_41D6_7B746EEB58D4"],"id":"overlay_6C3A9A6D_7D5F_181D_41C1_43F61C1D3A1B","data":{"label":"Polygon"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A","vertices":[{"yaw":56.87,"class":"PanoramaPoint","pitch":27.25},{"yaw":59.64,"class":"PanoramaPoint","pitch":25.2},{"yaw":59.69,"class":"PanoramaPoint","pitch":19.97},{"yaw":56.86,"class":"PanoramaPoint","pitch":21.42}],"class":"QuadHotspotPanoramaOverlayImage","distance":50,"data":{"label":"Icon Interaksi 2"}}],"areas":["this.HotspotPanoramaOverlayArea_72F9252E_7D8C_55F5_41C1_D30092F54085"],"id":"overlay_72F7D52D_7D8C_55F7_41CF_74826A09BDF9","data":{"label":"Icon Interaksi 2"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","rotationX":1,"roll":94.26,"distance":100,"rotationY":70.62,"pitch":-9.16,"image":"this.res_69E726CA_7D43_0807_4180_4B782C425D6E","yaw":6.69,"data":{"label":"GoToNeoJakarta_0-b"},"hfov":12.95,"scaleMode":"fit_inside","vfov":7.35}],"data":{"label":"GoToNeoJakarta_0-b","hasPanoramaAction":true},"id":"overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E","areas":["this.HotspotPanoramaOverlayArea_6D96FCDB_7D97_F453_41C2_CA189AE118C8"],"maps":[]},{"url":trans('imlevel_6929303B_7DFC_ABD2_41D2_612E9671979E.url'),"class":"ImageResourceLevel","height":1150,"id":"imlevel_6929303B_7DFC_ABD2_41D2_612E9671979E","width":2048},{"url":trans('imlevel_6929203B_7DFC_ABD2_41CF_6101937C370C.url'),"class":"ImageResourceLevel","height":575,"id":"imlevel_6929203B_7DFC_ABD2_41CF_6101937C370C","width":1024},{"url":trans('imlevel_692ED03B_7DFC_ABD2_41DF_6531FA8BFA30.url'),"class":"ImageResourceLevel","height":287,"id":"imlevel_692ED03B_7DFC_ABD2_41DF_6531FA8BFA30","width":512},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_77B81D7A_7D41_1807_41C3_1BC447E2A14E"},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","roll":90.14,"distance":100,"rotationY":66.52,"pitch":-6.93,"image":"this.res_69E726CA_7D43_0807_4180_4B782C425D6E","yaw":179.98,"data":{"label":"GoToNeoJakarta_0-a"},"hfov":10.5,"scaleMode":"fit_inside","vfov":4.38}],"data":{"label":"GoToNeoJakarta_0-a","hasPanoramaAction":true},"id":"overlay_6C2CE3C3_7D41_0805_4166_F560806526EB","areas":["this.HotspotPanoramaOverlayArea_6CD123CA_7D41_0804_41D4_AEDEBE1C37CE"],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"pitch":-11.82,"image":{"class":"ImageResource","levels":[{"height":1359,"width":182,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_HS_fi1vlu2e.png","class":"ImageResourceLevel"}]},"yaw":9.12,"hfov":8.55,"vfov":58.15}],"areas":["this.HotspotPanoramaOverlayArea_69AF63E4_7DF4_6C76_41D2_0D5B18CC3121"],"id":"overlay_69AE73E2_7DF4_6C72_41CC_8AF737C809E2","data":{"label":"Polygon"}},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"maps":[],"items":[{"image":"this.res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A","vertices":[{"yaw":7.07,"class":"PanoramaPoint","pitch":17.38},{"yaw":11.51,"class":"PanoramaPoint","pitch":17.38},{"yaw":11.44,"class":"PanoramaPoint","pitch":8.98},{"yaw":7.15,"class":"PanoramaPoint","pitch":8.98}],"class":"QuadHotspotPanoramaOverlayImage","distance":50,"data":{"label":"Icon Interaksi 2"}}],"areas":["this.HotspotPanoramaOverlayArea_69F1402B_7DF4_6BF3_41CE_0FE41A56DAEB"],"id":"overlay_69F1E02A_7DF4_6BF2_41B1_7019F9356876","data":{"label":"Icon Interaksi 2"}},{"mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C3FBA72_7D5F_1807_41D6_7B746EEB58D4","click":"this.showPopupPanoramaOverlay(this.popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C,{'borderSize':0,'pressedIconWidth':20,'rollOverIconLineWidth':2,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':2,'iconHeight':20,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':2,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconColor':'#888888','paddingLeft':5,'paddingBottom':5,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverBackgroundOpacity':1,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderRadius':0,'iconWidth':20,'pressedIconHeight':20,'borderColor':'#000000','iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1},this.ImageResource_696EC218_7DFC_AFDE_41D7_32F00494D399,null,null,null,false)"},{"id":"res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A","class":"ImageResource","levels":[{"height":253,"width":128,"url":"media/res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A_0.png","class":"ImageResourceLevel"}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_72F9252E_7D8C_55F5_41C1_D30092F54085","class":"HotspotPanoramaOverlayArea"},{"id":"res_69E726CA_7D43_0807_4180_4B782C425D6E","class":"ImageResource","levels":[{"height":222,"width":217,"url":"media/res_69E726CA_7D43_0807_4180_4B782C425D6E_0.png","class":"ImageResourceLevel"}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6D96FCDB_7D97_F453_41C2_CA189AE118C8","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CD123CA_7D41_0804_41D4_AEDEBE1C37CE","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_69AF63E4_7DF4_6C76_41D2_0D5B18CC3121","click":"this.showPopupPanoramaOverlay(this.popup_693BE66E_7DF5_B472_41AD_27CD00A02AC9,{'borderSize':0,'pressedIconWidth':20,'rollOverIconLineWidth':2,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':2,'iconHeight':20,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':2,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconColor':'#888888','paddingLeft':5,'paddingBottom':5,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverBackgroundOpacity':1,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderRadius':0,'iconWidth':20,'pressedIconHeight':20,'borderColor':'#000000','iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1},this.ImageResource_6E9BFCA9_7D8B_D4FE_41D1_6B280688D1D8,null,null,null,false)"},{"mapColor":"any","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_69F1402B_7DF4_6BF3_41CE_0FE41A56DAEB","class":"HotspotPanoramaOverlayArea"}],"watermark":false,"class":"Player","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"id":"rootPlayer","scripts":{"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"initAnalytics":TDV.Tour.Script.initAnalytics,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoForward":TDV.Tour.Script.historyGoForward,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"init":TDV.Tour.Script.init,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeJS":TDV.Tour.Script.executeJS,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"registerKey":TDV.Tour.Script.registerKey,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getOverlays":TDV.Tour.Script.getOverlays,"setMapLocation":TDV.Tour.Script.setMapLocation,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setLocale":TDV.Tour.Script.setLocale,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"translate":TDV.Tour.Script.translate,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"existsKey":TDV.Tour.Script.existsKey,"createTween":TDV.Tour.Script.createTween,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizShowScore":TDV.Tour.Script.quizShowScore,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"playAudioList":TDV.Tour.Script.playAudioList,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"initQuiz":TDV.Tour.Script.initQuiz,"shareSocial":TDV.Tour.Script.shareSocial,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaByName":TDV.Tour.Script.getMediaByName,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizStart":TDV.Tour.Script.quizStart,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentByName":TDV.Tour.Script.getComponentByName,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"clone":TDV.Tour.Script.clone,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"mixObject":TDV.Tour.Script.mixObject,"getKey":TDV.Tour.Script.getKey,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"openLink":TDV.Tour.Script.openLink,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPixels":TDV.Tour.Script.getPixels,"startMeasurement":TDV.Tour.Script.startMeasurement,"showWindow":TDV.Tour.Script.showWindow,"setValue":TDV.Tour.Script.setValue}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var aa = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return aa;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.2.21.js.map
})();
//Generated with v2022.2.21, Thu Feb 23 2023