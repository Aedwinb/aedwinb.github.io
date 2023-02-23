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
var script = {"layout":"absolute","height":"100%","backgroundColorRatios":[0],"start":"this.init()","data":{"history":{},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player855","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"pitch":1}},"propagateClick":false,"scrollBarColor":"#000000","width":"100%","scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"backgroundColor":["#FFFFFF"],"minWidth":0,"gap":10,"hash": "ab586839eb95b0914c6325f9c3c7e9f03162fc5153189610d3f335b414cc0628", "definitions": [{"id":"popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C","class":"PopupPanoramaOverlay","popupMaxWidth":"95%","hideDuration":500,"popupMaxHeight":"95%","showDuration":500,"pitch":19.36,"image":"this.ImageResource_6C25FC54_7D40_F803_41DA_B1371B0C2EB1","popupDistance":100,"yaw":58.07,"hfov":19.08,"showEasing":"cubic_in","hideEasing":"cubic_out"},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_camera","media":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_camera","media":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList"},{"vfov":180,"label":trans('panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08.label'),"overlays":["this.overlay_6F6094B5_7D41_080D_41B2_DD8935ADDD02","this.overlay_6C3A9A6D_7D5F_181D_41C1_43F61C1D3A1B","this.popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C"],"data":{"label":"Neo Jakarta_0-A"},"thumbnailUrl":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_t.jpg","adjacentPanoramas":[{"select":"this.overlay_6F6094B5_7D41_080D_41B2_DD8935ADDD02.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C","yaw":6.69,"class":"AdjacentPanorama","distance":10.54,"backwardYaw":179.98,"data":{"overlayID":"overlay_6F6094B5_7D41_080D_41B2_DD8935ADDD02"}}],"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2560,"width":15360,"rowCount":5,"tags":"ondemand","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel"},{"height":1536,"width":9216,"rowCount":3,"tags":"ondemand","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel"},{"height":1024,"width":6144,"rowCount":2,"tags":"ondemand","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel"},{"height":512,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel"},{"height":2048,"width":12288,"rowCount":1,"tags":"mobilevr2gen","url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/vr2gen/0.jpg","colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"hfovMax":130,"class":"Panorama","hfov":360,"id":"panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08"},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","mode":"quality","arrowKeysAction":"translate","touchControlMode":"drag_rotation","aaEnabled":true,"id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"id":"ImageResource_6C25FC54_7D40_F803_41DA_B1371B0C2EB1","class":"ImageResource","levels":["this.imlevel_6C0A2ACB_7D40_F805_418D_C60475831A78","this.imlevel_6C083ACB_7D40_F805_41C9_BB206A93F83D","this.imlevel_6C082ACB_7D40_F805_41CE_8AA8E04A0658"]},{"vfov":180,"label":trans('panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C.label'),"overlays":["this.overlay_6C2CE3C3_7D41_0805_4166_F560806526EB"],"data":{"label":"Neo Jakarta_0-B"},"thumbnailUrl":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_t.jpg","adjacentPanoramas":[{"select":"this.overlay_6C2CE3C3_7D41_0805_4166_F560806526EB.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08","yaw":179.98,"class":"AdjacentPanorama","distance":13.96,"backwardYaw":6.69,"data":{"overlayID":"overlay_6C2CE3C3_7D41_0805_4166_F560806526EB"}}],"hfovMin":"120%","frames":[{"thumbnailUrl":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_t.jpg","cube":{"class":"ImageResource","levels":[{"height":2560,"width":15360,"rowCount":5,"tags":"ondemand","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/0/{row}_{column}.jpg","colCount":30,"class":"TiledImageResourceLevel"},{"height":1536,"width":9216,"rowCount":3,"tags":"ondemand","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/1/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel"},{"height":1024,"width":6144,"rowCount":2,"tags":"ondemand","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/2/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel"},{"height":512,"width":3072,"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/3/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel"},{"height":2048,"width":12288,"rowCount":1,"tags":"mobilevr2gen","url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/vr2gen/0.jpg","colCount":6,"class":"TiledImageResourceLevel"}]},"class":"CubicPanoramaFrame"}],"hfovMax":130,"class":"Panorama","hfov":360,"id":"panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_7644FD7C_7D41_1803_41DA_533F3026C51E"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_77B81D7A_7D41_1807_41C3_1BC447E2A14E"},{"subtitlesTextShadowColor":"#000000","progressBarBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipPaddingLeft":6,"subtitlesTop":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBackgroundOpacity":1,"propagateClick":false,"data":{"name":"Main Viewer"},"progressBarBorderRadius":2,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","subtitlesBorderColor":"#FFFFFF","progressBorderRadius":2,"id":"MainViewer","toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","firstTransitionDuration":0,"vrPointerSelectionColor":"#FF6600","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"progressBackgroundColor":["#000000"],"subtitlesFontFamily":"Arial","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":3,"progressLeft":"33%","playbackBarHeadShadowOpacity":0.7,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressRight":"33%","progressBarBorderSize":0,"playbackBarBottom":5,"vrPointerSelectionTime":2000,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","class":"ViewerArea","playbackBarLeft":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadHeight":15,"playbackBarHeight":10,"playbackBarHeadShadowColor":"#000000","height":"100%","subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"width":"100%","toolTipBorderColor":"#767676","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","toolTipPaddingTop":4,"progressOpacity":0.7,"progressBorderColor":"#000000","playbackBarHeadWidth":6,"minHeight":50,"playbackBarProgressBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"minWidth":100,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadBorderSize":0,"subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorDirection":"horizontal","subtitlesBottom":50,"playbackBarHeadShadow":true,"vrPointerColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipFontFamily":"Arial","subtitlesTextShadowOpacity":1,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBottom":10,"toolTipPaddingRight":6,"progressHeight":2,"playbackBarHeadBorderRadius":0,"playbackBarRight":0,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"playbackBarBorderSize":0,"progressBorderSize":0},{"visible":false,"left":0,"right":0,"propagateClick":false,"data":{"name":"UIComponent10834"},"minHeight":0,"backgroundColorRatios":[0],"backgroundColor":["#000000"],"minWidth":0,"top":0,"bottom":0,"showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"class":"UIComponent","id":"veilPopupPanorama","backgroundOpacity":0.55},{"visible":false,"left":0,"right":0,"propagateClick":false,"data":{"name":"ZoomImage10835"},"minHeight":0,"backgroundColorRatios":[],"backgroundColor":[],"minWidth":0,"scaleMode":"custom","top":0,"bottom":0,"class":"ZoomImage","id":"zoomImagePopupPanorama"},{"visible":false,"fontColor":"#FFFFFF","right":10,"propagateClick":false,"data":{"name":"CloseButton10836"},"fontFamily":"Arial","iconLineWidth":2,"pressedIconColor":"#888888","minHeight":0,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"iconHeight":"100%","minWidth":0,"iconWidth":"100%","borderColor":"#000000","top":10,"layout":"horizontal","fontSize":"1.29vmin","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"iconColor":"#000000","rollOverIconColor":"#666666","class":"CloseButton","id":"closeButtonPopupPanorama","backgroundColorRatios":[0,0.09803921568627451,1]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","rotationX":1,"roll":94.26,"distance":100,"rotationY":70.62,"pitch":-9.16,"image":"this.res_69E726CA_7D43_0807_4180_4B782C425D6E","yaw":6.69,"data":{"label":"GoToNeoJakarta_0-b"},"hfov":12.95,"scaleMode":"fit_inside","vfov":7.35}],"data":{"label":"GoToNeoJakarta_0-b","hasPanoramaAction":true},"id":"overlay_6F6094B5_7D41_080D_41B2_DD8935ADDD02","areas":["this.HotspotPanoramaOverlayArea_6F66D4BD_7D41_087D_41D9_8608CA764595"],"maps":[]},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"rollOverDisplay":true,"maps":[],"items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"pitch":19.36,"image":{"class":"ImageResource","levels":[{"height":623,"width":150,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_HS_0d7x2dw4.png","class":"ImageResourceLevel"}]},"yaw":58.07,"hfov":7.02,"vfov":28.62}],"areas":["this.HotspotPanoramaOverlayArea_6C3FBA72_7D5F_1807_41D6_7B746EEB58D4"],"id":"overlay_6C3A9A6D_7D5F_181D_41C1_43F61C1D3A1B","data":{"label":"Polygon"}},{"url":trans('imlevel_6C0A2ACB_7D40_F805_418D_C60475831A78.url'),"class":"ImageResourceLevel","height":2048,"id":"imlevel_6C0A2ACB_7D40_F805_418D_C60475831A78","width":1365},{"url":trans('imlevel_6C083ACB_7D40_F805_41C9_BB206A93F83D.url'),"class":"ImageResourceLevel","height":1024,"id":"imlevel_6C083ACB_7D40_F805_41C9_BB206A93F83D","width":682},{"url":trans('imlevel_6C082ACB_7D40_F805_41CE_8AA8E04A0658.url'),"class":"ImageResourceLevel","height":512,"id":"imlevel_6C082ACB_7D40_F805_41CE_8AA8E04A0658","width":341},{"useHandCursor":true,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","roll":90.14,"distance":100,"rotationY":66.52,"pitch":-6.93,"image":"this.res_69E726CA_7D43_0807_4180_4B782C425D6E","yaw":179.98,"data":{"label":"GoToNeoJakarta_0-a"},"hfov":10.5,"scaleMode":"fit_inside","vfov":4.38}],"data":{"label":"GoToNeoJakarta_0-a","hasPanoramaAction":true},"id":"overlay_6C2CE3C3_7D41_0805_4166_F560806526EB","areas":["this.HotspotPanoramaOverlayArea_6CD123CA_7D41_0804_41D4_AEDEBE1C37CE"],"maps":[]},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_7644FD7C_7D41_1803_41DA_533F3026C51E"},{"class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"id":"sequence_77B81D7A_7D41_1807_41C3_1BC447E2A14E"},{"id":"res_69E726CA_7D43_0807_4180_4B782C425D6E","class":"ImageResource","levels":[{"height":222,"width":217,"url":"media/res_69E726CA_7D43_0807_4180_4B782C425D6E_0.png","class":"ImageResourceLevel"}]},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6F66D4BD_7D41_087D_41D9_8608CA764595","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"mapColor":"image","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C3FBA72_7D5F_1807_41D6_7B746EEB58D4","click":"this.showPopupPanoramaOverlay(this.popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C,{'borderSize':0,'pressedIconWidth':20,'rollOverIconLineWidth':2,'rollOverIconWidth':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColorDirection':'vertical','iconLineWidth':2,'iconHeight':20,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':2,'rollOverIconColor':'#666666','pressedBorderSize':0,'pressedIconColor':'#888888','paddingLeft':5,'paddingBottom':5,'backgroundColorDirection':'vertical','rollOverBorderSize':0,'rollOverBackgroundOpacity':1,'paddingTop':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderRadius':0,'iconWidth':20,'pressedIconHeight':20,'borderColor':'#000000','iconColor':'#000000','pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconHeight':20,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':1},this.ImageResource_6C25FC54_7D40_F803_41DA_B1371B0C2EB1,null,null,null,false)"},{"mapColor":"any","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6CD123CA_7D41_0804_41D4_AEDEBE1C37CE","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"}],"watermark":false,"class":"Player","children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"id":"rootPlayer","scripts":{"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"downloadFile":TDV.Tour.Script.downloadFile,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"shareSocial":TDV.Tour.Script.shareSocial,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playAudioList":TDV.Tour.Script.playAudioList,"initAnalytics":TDV.Tour.Script.initAnalytics,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"init":TDV.Tour.Script.init,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizFinish":TDV.Tour.Script.quizFinish,"quizStart":TDV.Tour.Script.quizStart,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"translate":TDV.Tour.Script.translate,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"createTween":TDV.Tour.Script.createTween,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"textToSpeech":TDV.Tour.Script.textToSpeech,"showWindow":TDV.Tour.Script.showWindow,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"registerKey":TDV.Tour.Script.registerKey,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"isPanorama":TDV.Tour.Script.isPanorama,"historyGoBack":TDV.Tour.Script.historyGoBack,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentByName":TDV.Tour.Script.getComponentByName,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlays":TDV.Tour.Script.getOverlays,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"openLink":TDV.Tour.Script.openLink,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getKey":TDV.Tour.Script.getKey,"mixObject":TDV.Tour.Script.mixObject,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPixels":TDV.Tour.Script.getPixels,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"resumePlayers":TDV.Tour.Script.resumePlayers,"existsKey":TDV.Tour.Script.existsKey}};
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