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
var script = {"scrollBarMargin":2,"children":["this.MainViewer","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"layout":"absolute","propagateClick":false,"start":"this.init()","data":{"history":{},"textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player855"},"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"minHeight":0,"backgroundColor":["#FFFFFF"],"gap":10,"minWidth":0,"scripts":{"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setValue":TDV.Tour.Script.setValue,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getOverlays":TDV.Tour.Script.getOverlays,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"init":TDV.Tour.Script.init,"getMainViewer":TDV.Tour.Script.getMainViewer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setLocale":TDV.Tour.Script.setLocale,"playAudioList":TDV.Tour.Script.playAudioList,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"historyGoBack":TDV.Tour.Script.historyGoBack,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupImage":TDV.Tour.Script.showPopupImage,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"createTween":TDV.Tour.Script.createTween,"translate":TDV.Tour.Script.translate,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"mixObject":TDV.Tour.Script.mixObject,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"showWindow":TDV.Tour.Script.showWindow,"downloadFile":TDV.Tour.Script.downloadFile,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMapLocation":TDV.Tour.Script.setMapLocation,"clone":TDV.Tour.Script.clone,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizStart":TDV.Tour.Script.quizStart,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaByName":TDV.Tour.Script.getMediaByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openLink":TDV.Tour.Script.openLink,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"registerKey":TDV.Tour.Script.registerKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits},"watermark":false,"hash": "4be14f30dd6766bdeecba994ca39b04ece6c87050b3afdc5320795a4774ec8d0", "definitions": [{"showEasing":"cubic_in","hideEasing":"cubic_out","hideDuration":500,"showDuration":500,"popupMaxHeight":"100%","class":"PopupPanoramaOverlay","pitch":-11.82,"popupDistance":100,"image":"this.ImageResource_7394A056_7DF5_2260_41CD_3C49FFCC8469","yaw":9.12,"hfov":8.55,"popupMaxWidth":"100%","id":"popup_693BE66E_7DF5_B472_41AD_27CD00A02AC9"},{"vfov":180,"overlays":["this.overlay_6C2CE3C3_7D41_0805_4166_F560806526EB","this.overlay_69AE73E2_7DF4_6C72_41CC_8AF737C809E2","this.popup_693BE66E_7DF5_B472_41AD_27CD00A02AC9","this.overlay_69F1E02A_7DF4_6BF2_41B1_7019F9356876"],"label":trans('panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C.label'),"thumbnailUrl":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_t.jpg","data":{"label":"Neo Jakarta_0-B"},"frames":[{"cube":{"levels":[{"height":2560,"width":15360,"rowCount":5,"colCount":30,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand"},{"height":1536,"width":9216,"rowCount":3,"colCount":18,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand"},{"height":1024,"width":6144,"rowCount":2,"colCount":12,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand"},{"height":512,"width":3072,"rowCount":1,"colCount":6,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"]},{"height":2048,"width":12288,"rowCount":1,"colCount":6,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr2gen"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_t.jpg"}],"class":"Panorama","hfovMin":"120%","hfovMax":130,"adjacentPanoramas":[{"backwardYaw":6.69,"yaw":179.98,"class":"AdjacentPanorama","panorama":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08","distance":13.96,"data":{"overlayID":"overlay_6C2CE3C3_7D41_0805_4166_F560806526EB"},"select":"this.overlay_6C2CE3C3_7D41_0805_4166_F560806526EB.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"id":"panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C"},{"vfov":180,"overlays":["this.overlay_6C3A9A6D_7D5F_181D_41C1_43F61C1D3A1B","this.popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C","this.overlay_72F7D52D_7D8C_55F7_41CF_74826A09BDF9","this.overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E"],"label":trans('panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08.label'),"thumbnailUrl":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_t.jpg","data":{"label":"Neo Jakarta_0-A"},"frames":[{"cube":{"levels":[{"height":2560,"width":15360,"rowCount":5,"colCount":30,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand"},{"height":1536,"width":9216,"rowCount":3,"colCount":18,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand"},{"height":1024,"width":6144,"rowCount":2,"colCount":12,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand"},{"height":512,"width":3072,"rowCount":1,"colCount":6,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"]},{"height":2048,"width":12288,"rowCount":1,"colCount":6,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_0/{face}/vr2gen/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr2gen"}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_t.jpg"}],"class":"Panorama","hfovMin":"120%","hfovMax":130,"adjacentPanoramas":[{"backwardYaw":179.98,"yaw":6.69,"class":"AdjacentPanorama","panorama":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C","distance":10.54,"data":{"overlayID":"overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E"},"select":"this.overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfov":360,"id":"panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08"},{"levels":["this.imlevel_73F8CAF3_7DF5_2627_41C8_4EBD3814AF8E","this.imlevel_73FE3AF4_7DF5_2621_41D1_2F10546F6D8A"],"id":"ImageResource_73AD304E_7DF5_2260_41D8_575BFA12C0A5","class":"ImageResource"},{"showEasing":"cubic_in","hideEasing":"cubic_out","hideDuration":500,"showDuration":500,"popupMaxHeight":"90%","class":"PopupPanoramaOverlay","pitch":17.52,"popupDistance":100,"image":"this.ImageResource_73AD304E_7DF5_2260_41D8_575BFA12C0A5","yaw":58.11,"hfov":7.03,"popupMaxWidth":"100%","id":"popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C"},{"id":"mainPlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_camera","media":"this.panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_camera","media":"this.panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"}],"class":"PlayList"},{"levels":["this.imlevel_73E45EC0_7DF5_3E60_41D0_5305E9D2A28F","this.imlevel_73E46EC0_7DF5_3E60_41D1_CE4DE4CDBAD5","this.imlevel_73E47EC0_7DF5_3E60_41D6_EE8D38873BC7"],"id":"ImageResource_7394A056_7DF5_2260_41CD_3C49FFCC8469","class":"ImageResource"},{"mode":"quality","mouseControlMode":"drag_rotation","class":"PanoramaPlayer","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"initialSequence":"this.sequence_77B81D7A_7D41_1807_41C3_1BC447E2A14E","class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"subtitlesTextShadowColor":"#000000","toolTipPaddingTop":4,"progressBackgroundColor":["#000000"],"subtitlesFontSize":"3vmin","firstTransitionDuration":0,"data":{"name":"Main Viewer"},"progressBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarLeft":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesFontFamily":"Arial","playbackBarHeight":10,"progressLeft":"33%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadBorderSize":0,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"toolTipPaddingRight":6,"subtitlesGap":0,"playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","playbackBarHeadShadow":true,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipBorderColor":"#767676","subtitlesTextShadowOpacity":1,"propagateClick":false,"width":"100%","playbackBarProgressBorderRadius":0,"progressBarBorderColor":"#000000","toolTipPaddingBottom":4,"progressBarBackgroundColorRatios":[0],"progressRight":"33%","playbackBarRight":0,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesFontColor":"#FFFFFF","progressHeight":2,"progressOpacity":0.7,"progressBorderRadius":2,"subtitlesTextShadowVerticalLength":1,"progressBorderSize":0,"subtitlesBottom":50,"progressBorderColor":"#000000","minHeight":50,"height":"100%","toolTipShadowColor":"#333138","minWidth":100,"progressBarBackgroundColorDirection":"horizontal","toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingLeft":6,"playbackBarBottom":5,"vrPointerSelectionColor":"#FF6600","playbackBarBorderSize":0,"playbackBarHeadBorderColor":"#000000","progressBarBorderRadius":2,"progressBottom":10,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"id":"MainViewer"},{"initialSequence":"this.sequence_7644FD7C_7D41_1803_41DA_533F3026C51E","class":"PanoramaCamera","enterPointingToHorizon":true,"id":"panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"propagateClick":false,"right":0,"data":{"name":"UIComponent4179"},"backgroundColorRatios":[0],"minHeight":0,"backgroundColor":["#000000"],"top":0,"minWidth":0,"bottom":0,"showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"class":"UIComponent","backgroundOpacity":0.55,"left":0,"visible":false,"id":"veilPopupPanorama"},{"propagateClick":false,"right":0,"data":{"name":"ZoomImage4180"},"backgroundColorRatios":[],"minHeight":0,"backgroundColor":[],"scaleMode":"custom","top":0,"minWidth":0,"bottom":0,"class":"ZoomImage","left":0,"visible":false,"id":"zoomImagePopupPanorama"},{"fontColor":"#FFFFFF","propagateClick":false,"rollOverIconColor":"#666666","right":10,"iconHeight":"100%","data":{"name":"CloseButton4181"},"layout":"horizontal","backgroundColorRatios":[0,0.09803921568627451,1],"minHeight":0,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"top":10,"minWidth":0,"pressedIconColor":"#888888","fontSize":"1.29vmin","showEffect":{"easing":"cubic_in_out","duration":350,"class":"FadeInEffect"},"iconLineWidth":2,"iconWidth":"100%","iconColor":"#000000","borderColor":"#000000","class":"CloseButton","fontFamily":"Arial","visible":false,"id":"closeButtonPopupPanorama"},{"id":"overlay_6C2CE3C3_7D41_0805_4166_F560806526EB","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","roll":90.14,"distance":100,"rotationY":66.52,"pitch":-6.93,"vfov":4.38,"image":"this.res_69E726CA_7D43_0807_4180_4B782C425D6E","yaw":179.98,"data":{"label":"GoToNeoJakarta_0-a"},"hfov":10.5,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_6CD123CA_7D41_0804_41D4_AEDEBE1C37CE"],"maps":[],"useHandCursor":true,"data":{"label":"GoToNeoJakarta_0-a","hasPanoramaAction":true}},{"id":"overlay_69AE73E2_7DF4_6C72_41CC_8AF737C809E2","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"pitch":-11.82,"image":{"levels":[{"height":1359,"width":182,"url":"media/panorama_77AD15F7_7D41_080D_41CE_76A8D96AD74C_HS_fi1vlu2e.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"yaw":9.12,"hfov":8.55,"vfov":58.15}],"areas":["this.HotspotPanoramaOverlayArea_69AF63E4_7DF4_6C76_41D2_0D5B18CC3121"],"maps":[],"useHandCursor":true,"data":{"label":"Polygon"}},{"id":"overlay_69F1E02A_7DF4_6BF2_41B1_7019F9356876","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A","vertices":[{"yaw":7.07,"class":"PanoramaPoint","pitch":17.38},{"yaw":11.51,"class":"PanoramaPoint","pitch":17.38},{"yaw":11.44,"class":"PanoramaPoint","pitch":8.98},{"yaw":7.15,"class":"PanoramaPoint","pitch":8.98}],"class":"QuadHotspotPanoramaOverlayImage","distance":50,"data":{"label":"Icon Interaksi 2"}}],"areas":["this.HotspotPanoramaOverlayArea_69F1402B_7DF4_6BF3_41CE_0FE41A56DAEB"],"maps":[],"useHandCursor":true,"data":{"label":"Icon Interaksi 2"}},{"id":"overlay_6C3A9A6D_7D5F_181D_41C1_43F61C1D3A1B","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Polygon"},"pitch":17.52,"image":{"levels":[{"height":514,"width":150,"url":"media/panorama_715F7C5A_7D41_3807_4144_46D3E0CD3D08_HS_0d7x2dw4.png","class":"ImageResourceLevel"}],"class":"ImageResource"},"yaw":58.11,"hfov":7.03,"vfov":23.75}],"rollOverDisplay":true,"areas":["this.HotspotPanoramaOverlayArea_6C3FBA72_7D5F_1807_41D6_7B746EEB58D4"],"maps":[],"useHandCursor":true,"data":{"label":"Polygon"}},{"id":"overlay_72F7D52D_7D8C_55F7_41CF_74826A09BDF9","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"image":"this.res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A","vertices":[{"yaw":56.87,"class":"PanoramaPoint","pitch":27.25},{"yaw":59.64,"class":"PanoramaPoint","pitch":25.2},{"yaw":59.69,"class":"PanoramaPoint","pitch":19.97},{"yaw":56.86,"class":"PanoramaPoint","pitch":21.42}],"class":"QuadHotspotPanoramaOverlayImage","distance":50,"data":{"label":"Icon Interaksi 2"}}],"areas":["this.HotspotPanoramaOverlayArea_72F9252E_7D8C_55F5_41C1_D30092F54085"],"maps":[],"useHandCursor":true,"data":{"label":"Icon Interaksi 2"}},{"id":"overlay_6D96BCDA_7D97_F45D_41D0_6A8421E01D7E","enabledInCardboard":true,"class":"HotspotPanoramaOverlay","items":[{"class":"HotspotPanoramaOverlayImage","rotationX":1,"roll":94.26,"distance":100,"rotationY":70.62,"pitch":-9.16,"vfov":7.35,"image":"this.res_69E726CA_7D43_0807_4180_4B782C425D6E","yaw":6.69,"data":{"label":"GoToNeoJakarta_0-b"},"hfov":12.95,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_6D96FCDB_7D97_F453_41C2_CA189AE118C8"],"maps":[],"useHandCursor":true,"data":{"label":"GoToNeoJakarta_0-b","hasPanoramaAction":true}},{"url":trans('imlevel_73F8CAF3_7DF5_2627_41C8_4EBD3814AF8E.url'),"class":"ImageResourceLevel","height":877,"id":"imlevel_73F8CAF3_7DF5_2627_41C8_4EBD3814AF8E","width":1023},{"url":trans('imlevel_73FE3AF4_7DF5_2621_41D1_2F10546F6D8A.url'),"class":"ImageResourceLevel","height":438,"id":"imlevel_73FE3AF4_7DF5_2621_41D1_2F10546F6D8A","width":511},{"url":trans('imlevel_73E45EC0_7DF5_3E60_41D0_5305E9D2A28F.url'),"class":"ImageResourceLevel","height":1152,"id":"imlevel_73E45EC0_7DF5_3E60_41D0_5305E9D2A28F","width":2047},{"url":trans('imlevel_73E46EC0_7DF5_3E60_41D1_CE4DE4CDBAD5.url'),"class":"ImageResourceLevel","height":576,"id":"imlevel_73E46EC0_7DF5_3E60_41D1_CE4DE4CDBAD5","width":1023},{"url":trans('imlevel_73E47EC0_7DF5_3E60_41D6_EE8D38873BC7.url'),"class":"ImageResourceLevel","height":288,"id":"imlevel_73E47EC0_7DF5_3E60_41D6_EE8D38873BC7","width":511},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_77B81D7A_7D41_1807_41C3_1BC447E2A14E"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"class":"PanoramaCameraSequence","id":"sequence_7644FD7C_7D41_1803_41DA_533F3026C51E"},{"levels":[{"height":222,"width":217,"url":"media/res_69E726CA_7D43_0807_4180_4B782C425D6E_0.png","class":"ImageResourceLevel"}],"id":"res_69E726CA_7D43_0807_4180_4B782C425D6E","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_6CD123CA_7D41_0804_41D4_AEDEBE1C37CE","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"HotspotPanoramaOverlayArea_69AF63E4_7DF4_6C76_41D2_0D5B18CC3121","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"image","click":"this.showPopupPanoramaOverlay(this.popup_693BE66E_7DF5_B472_41AD_27CD00A02AC9,{'rollOverBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedIconColor':'#888888','pressedIconLineWidth':2,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconHeight':20,'iconWidth':20,'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundOpacity':1,'borderSize':0,'paddingTop':5,'paddingLeft':5,'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderRadius':0,'borderColor':'#000000','iconColor':'#000000','rollOverIconLineWidth':2,'backgroundOpacity':1,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','iconLineWidth':2},this.ImageResource_7394A056_7DF5_2260_41CD_3C49FFCC8469,null,null,null,false)"},{"levels":[{"height":253,"width":128,"url":"media/res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A_0.png","class":"ImageResourceLevel"}],"id":"res_6D65E99C_7D9B_BCD6_41C1_B9AABC301F3A","class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_69F1402B_7DF4_6BF3_41CE_0FE41A56DAEB","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"HotspotPanoramaOverlayArea_6C3FBA72_7D5F_1807_41D6_7B746EEB58D4","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"image","click":"this.showPopupPanoramaOverlay(this.popup_6F95F7E0_7D5F_0803_41CB_CA71D59D209C,{'rollOverBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedIconColor':'#888888','pressedIconLineWidth':2,'rollOverIconColor':'#666666','pressedBorderSize':0,'iconHeight':20,'iconWidth':20,'backgroundColorDirection':'vertical','pressedIconHeight':20,'rollOverBorderSize':0,'rollOverBackgroundOpacity':1,'borderSize':0,'paddingTop':5,'paddingLeft':5,'paddingBottom':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconWidth':20,'borderRadius':0,'borderColor':'#000000','iconColor':'#000000','rollOverIconLineWidth':2,'backgroundOpacity':1,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorDirection':'vertical','iconLineWidth':2},this.ImageResource_73AD304E_7DF5_2260_41D8_575BFA12C0A5,null,null,null,false)"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_72F9252E_7D8C_55F5_41C1_D30092F54085","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"HotspotPanoramaOverlayArea_6D96FCDB_7D97_F453_41C2_CA189AE118C8","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"}],"class":"Player","height":"100%","width":"100%","scrollBarColor":"#000000","id":"rootPlayer"};
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