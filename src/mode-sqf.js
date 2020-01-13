define("ace/mode/sqf_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

var SQFHighlightRules = function() {

    this.$rules = {
        start: [{
            token: "keyword.control.sqf",
            regex: /\b(?:DIK_0|DIK_1|DIK_2|DIK_3|DIK_4|DIK_5|DIK_6|DIK_7|DIK_8|DIK_9|DIK_A|DIK_ABNT_C1|DIK_ABNT_C2|DIK_ADD|DIK_APOSTROPHE|DIK_APPS|DIK_AT|DIK_AX|DIK_B|DIK_BACK|DIK_BACKSLASH|DIK_BACKSPACE|DIK_C|DIK_CALCULATOR|DIK_CAPITAL|DIK_CAPSLOCK|DIK_CIRCUMFLEX|DIK_COLON|DIK_COMMA|DIK_CONVERT|DIK_D|DIK_DECIMAL|DIK_DELETE|DIK_DIVIDE|DIK_DOWN|DIK_DOWNARROW|DIK_E|DIK_END|DIK_EQUALS|DIK_ESCAPE|DIK_F|DIK_F1|DIK_F10|DIK_F11|DIK_F12|DIK_F13|DIK_F14|DIK_F15|DIK_F2|DIK_F3|DIK_F4|DIK_F5|DIK_F6|DIK_F7|DIK_F8|DIK_F9|DIK_G|DIK_GRAVE|DIK_H|DIK_HOME|DIK_I|DIK_INSERT|DIK_J|DIK_K|DIK_KANA|DIK_KANJI|DIK_L|DIK_LALT|DIK_LBRACKET|DIK_LCONTROL|DIK_LEFT|DIK_LEFTARROW|DIK_LMENU|DIK_LSHIFT|DIK_LWIN|DIK_M|DIK_MAIL|DIK_MEDIASELECT|DIK_MEDIASTOP|DIK_MINUS|DIK_MULTIPLY|DIK_MUTE|DIK_MYCOMPUTER|DIK_N|DIK_NEXT|DIK_NEXTTRACK|DIK_NOCONVERT|DIK_NUMLOCK|DIK_NUMPAD0|DIK_NUMPAD1|DIK_NUMPAD2|DIK_NUMPAD3|DIK_NUMPAD4|DIK_NUMPAD5|DIK_NUMPAD6|DIK_NUMPAD7|DIK_NUMPAD8|DIK_NUMPAD9|DIK_NUMPADCOMMA|DIK_NUMPADENTER|DIK_NUMPADEQUALS|DIK_NUMPADMINUS|DIK_NUMPADPERIOD|DIK_NUMPADPLUS|DIK_NUMPADSLASH|DIK_NUMPADSTAR|DIK_O|DIK_OEM_102|DIK_P|DIK_PAUSE|DIK_PERIOD|DIK_PGDN|DIK_PGUP|DIK_PLAYPAUSE|DIK_POWER|DIK_PREVTRACK|DIK_PRIOR|DIK_Q|DIK_R|DIK_RALT|DIK_RBRACKET|DIK_RCONTROL|DIK_RETURN|DIK_RIGHT|DIK_RIGHTARROW|DIK_RMENU|DIK_RSHIFT|DIK_RWIN|DIK_S|DIK_SCROLL|DIK_SEMICOLON|DIK_SLASH|DIK_SLEEP|DIK_SPACE|DIK_STOP|DIK_SUBTRACT|DIK_SYSRQ|DIK_T|DIK_TAB|DIK_U|DIK_UNDERLINE|DIK_UNLABELED|DIK_UP|DIK_UPARROW|DIK_V|DIK_VOLUMEDOWN|DIK_VOLUMEUP|DIK_W|DIK_WAKE|DIK_WEBBACK|DIK_WEBFAVORITES|DIK_WEBFORWARD|DIK_WEBHOME|DIK_WEBREFRESH|DIK_WEBSEARCH|DIK_WEBSTOP|DIK_X|DIK_Y|DIK_YEN|DIK_Z|_|__ManPosBinoc|__ManPosBinocLying|__ManPosBinocStand|__ManPosCombat|__ManPosCrouch|__ManPosDead|__ManPosHandGunCrouch|__ManPosHandGunLying|__ManPosHandGunStand|__ManPosLying|__ManPosLyingNoWeapon|__ManPosNoActions|__ManPosNoWeapon|__ManPosStand|__ManPosSwimming|__ManPosWeapon|__ReadAndCreate|__ReadAndWrite|__ReadOnly|__ReadOnlyVerified|__TCivilian|__TEast|__TEnemy|__TFriendly|__TGuerrila|__TLogic|__TSideUnknown|__TWest|__WeaponHardMounted|__WeaponNoSlot|__WeaponSlotBinocular|__WeaponSlotHandGun|__WeaponSlotHandGunItem|__WeaponSlotHandGunMag|__WeaponSlotInventory|__WeaponSlotItem|__WeaponSlotMachinegun|__WeaponSlotMag|__WeaponSlotPrimary|__WeaponSlotSecondary|__callFile|__change|__checkBit|__common_macro_present|__compileFile|__config_macro_present|__currentLang|__currentLangAbbr|__dec|__errorLog|__false|__for|__forConf|__frac|__getBit|__grep|__grepArray|__inc|__int|__isArray|__isBool|__isBoolean|__isCode|__isConfig|__isControl|__isDiary|__isDisplay|__isFunction|__isGroup|__isHandle|__isNumber|__isObject|__isSGML|__isScalar|__isScript|__isSide|__isString|__isTask|__isTeamMember|__isText|__item|__itemr|__lib|__localeLang|__localeLangAbbr|__log2|__logN|__mGet|__mSet|__makeErrorText|__makeMessageText|__map|__mapArray|__mathInf|__messageLog|__module_name|__nsGet|__nsGetDefault|__nsSet|__nsSetGlobal|__ns_prefix|__pGet|__pSet|__pop|__private|__profiler|__profilerEnd|__profilerStart|__profiler_macro_present|__project_name|__protected|__public|__push|__pushTo|__q|__randomSelect|__sqf2str|__toRange|__top|__true|__uiGet|__uiSet|__writeTop|__xor|_forEachIndex|_this|_x|and|arg|argIfExist|argIfType|argOr|call|case|catch|def|default|do|else|exec|execVM|exit|exitWith|false|for|foreach|from|func|h|if|ifArgType|ifExistArg|invoke|nil|not|or|pi|preprocessFile|private|private1|private2|private3|private4|private5|private6|private7|private8|private9|spawn|step|switch|then|this|throw|to|true|try|var|w|while|with|x|y|z)\b/,
            caseInsensitive: true
        }, {
            token: "support.function.sqf",
            regex: /\b(?:abs|accTime|acos|action|actionKeys|actionKeysImages|actionKeysNames|actionKeysNamesArray|actionName|activateAddons|activatedAddons|activateKey|addAction|addBackpack|addBackpackCargo|addBackpackCargoGlobal|addBackpackGlobal|addCamShake|addCuratorAddons|addCuratorCameraArea|addCuratorEditableObjects|addCuratorEditingArea|addCuratorPoints|addEditorObject|addEventHandler|addGoggles|addGroupIcon|addHandgunItem|addHeadgear|addItem|addItemCargo|addItemCargoGlobal|addItemPool|addItemToBackpack|addItemToUniform|addItemToVest|addLiveStats|addMagazine|addMagazineAmmoCargo|addMagazineCargo|addMagazineCargoGlobal|addMagazineGlobal|addMagazinePool|addMagazines|addMagazineTurret|addMenu|addMenuItem|addMissionEventHandler|addMPEventHandler|addMusicEventHandler|addPrimaryWeaponItem|addPublicVariableEventHandler|addRating|addResources|addScore|addScoreSide|addSecondaryWeaponItem|addSwitchableUnit|addTeamMember|addToRemainsCollector|addUniform|addVehicle|addVest|addWaypoint|addWeapon|addWeaponCargo|addWeaponCargoGlobal|addWeaponGlobal|addWeaponPool|addWeaponTurret|agent|agents|AGLToASL|aimedAtTarget|aimPos|airDensityRTD|airportSide|AISFinishHeal|alive|allControls|allCurators|allDead|allDeadMen|allDisplays|allGroups|allMapMarkers|allMines|allMissionObjects|allow3DMode|allowCrewInImmobile|allowCuratorLogicIgnoreAreas|allowDamage|allowDammage|allowFileOperations|allowFleeing|allowGetIn|allSites|allTurrets|allUnits|allUnitsUAV|allVariables|ammo|animate|animateDoor|animationPhase|animationState|append|armoryPoints|asin|ASLToAGL|ASLToATL|assert|assignAsCargo|assignAsCargoIndex|assignAsCommander|assignAsDriver|assignAsGunner|assignAsTurret|assignCurator|assignedCargo|assignedCommander|assignedDriver|assignedGunner|assignedItems|assignedTarget|assignedTeam|assignedVehicle|assignedVehicleRole|assignItem|assignTeam|assignToAirport|atan|atan2|atg|ATLToASL|attachedObject|attachedObjects|attachedTo|attachObject|attachTo|attackEnabled|backpack|backpackCargo|backpackContainer|backpackItems|backpackMagazines|backpackSpaceFor|behaviour|benchmark|binocular|blufor|boundingBox|boundingBoxReal|boundingCenter|breakOut|breakTo|briefingName|buildingExit|buildingPos|buttonAction|buttonSetAction|cadetMode|callExtension|camCommand|camCommit|camCommitPrepared|camCommitted|camConstuctionSetParams|camCreate|camDestroy|cameraEffect|cameraEffectEnableHUD|cameraInterest|cameraOn|cameraView|campaignConfigFile|camPreload|camPreloaded|camPrepareBank|camPrepareDir|camPrepareDive|camPrepareFocus|camPrepareFov|camPrepareFovRange|camPreparePos|camPrepareRelPos|camPrepareTarget|camSetBank|camSetDir|camSetDive|camSetFocus|camSetFov|camSetFovRange|camSetPos|camSetRelPos|camSetTarget|camTarget|camUseNVG|canAdd|canAddItemToBackpack|canAddItemToUniform|canAddItemToVest|cancelSimpleTaskDestination|canFire|canMove|canSlingLoad|canStand|canUnloadInCombat|captive|captiveNum|cbChecked|cbSetChecked|ceil|cheatsEnabled|checkAIFeature|civilian|className|clearAllItemsFromBackpack|clearBackpackCargo|clearBackpackCargoGlobal|clearGroupIcons|clearItemCargo|clearItemCargoGlobal|clearItemPool|clearMagazineCargo|clearMagazineCargoGlobal|clearMagazinePool|clearOverlay|clearRadio|clearWeaponCargo|clearWeaponCargoGlobal|clearWeaponPool|closeDialog|closeDisplay|closeOverlay|collapseObjectTree|combatMode|commandArtilleryFire|commandChat|commander|commandFire|commandFollow|commandFSM|commandGetOut|commandingMenu|commandMove|commandRadio|commandStop|commandTarget|commandWatch|comment|commitOverlay|compile|compileFinal|completedFSM|composeText|configClasses|configFile|configName|configProperties|connectTerminalToUAV|controlNull|copyFromClipboard|copyToClipboard|copyWaypoints|cos|count|countEnemy|countFriendly|countSide|countType|countUnknown|createAgent|createCenter|createDialog|createDiaryLink|createDiaryRecord|createDiarySubject|createDisplay|createGearDialog|createGroup|createGuardedPoint|createLocation|createMarker|createMarkerLocal|createMenu|createMine|createMissionDisplay|createSimpleTask|createSite|createSoundSource|createTask|createTeam|createTrigger|createUnit|createVehicle|createVehicleCrew|createVehicleLocal|crew|ctrlActivate|ctrlAddEventHandler|ctrlAutoScrollDelay|ctrlAutoScrollRewind|ctrlAutoScrollSpeed|ctrlChecked|ctrlClassName|ctrlCommit|ctrlCommitted|ctrlCreate|ctrlDelete|ctrlEnable|ctrlEnabled|ctrlFade|ctrlHTMLLoaded|ctrlIDC|ctrlIDD|ctrlMapAnimAdd|ctrlMapAnimClear|ctrlMapAnimCommit|ctrlMapAnimDone|ctrlMapCursor|ctrlMapMouseOver|ctrlMapScale|ctrlMapScreenToWorld|ctrlMapWorldToScreen|ctrlModel|ctrlModelDirAndUp|ctrlModelScale|ctrlParent|ctrlPosition|ctrlRemoveAllEventHandlers|ctrlRemoveEventHandler|ctrlScale|ctrlSetActiveColor|ctrlSetAutoScrollDelay|ctrlSetAutoScrollRewind|ctrlSetAutoScrollSpeed|ctrlSetBackgroundColor|ctrlSetChecked|ctrlSetEventHandler|ctrlSetFade|ctrlSetFocus|ctrlSetFont|ctrlSetFontH1|ctrlSetFontH1B|ctrlSetFontH2|ctrlSetFontH2B|ctrlSetFontH3|ctrlSetFontH3B|ctrlSetFontH4|ctrlSetFontH4B|ctrlSetFontH5|ctrlSetFontH5B|ctrlSetFontH6|ctrlSetFontH6B|ctrlSetFontHeight|ctrlSetFontHeightH1|ctrlSetFontHeightH2|ctrlSetFontHeightH3|ctrlSetFontHeightH4|ctrlSetFontHeightH5|ctrlSetFontHeightH6|ctrlSetFontP|ctrlSetFontPB|ctrlSetForegroundColor|ctrlSetModel|ctrlSetModelDirAndUp|ctrlSetModelScale|ctrlSetPosition|ctrlSetScale|ctrlSetStructuredText|ctrlSetText|ctrlSetTextColor|ctrlSetTooltip|ctrlSetTooltipColorBox|ctrlSetTooltipColorShade|ctrlSetTooltipColorText|ctrlShow|ctrlShown|ctrlText|ctrlTextHeight|ctrlType|ctrlVisible|curatorAddons|curatorCamera|curatorCameraArea|curatorCameraAreaCeiling|curatorCoef|curatorEditableObjects|curatorEditingArea|curatorEditingAreaType|curatorMouseOver|curatorPoints|curatorRegisteredObjects|curatorSelected|curatorWaypointCost|currentCommand|currentMagazine|currentMagazineDetail|currentMagazineDetailTurret|currentMagazineTurret|currentMuzzle|currentTask|currentTasks|currentVisionMode|currentWaypoint|currentWeapon|currentWeaponMode|currentWeaponTurret|currentZeroing|cursorTarget|customChat|customRadio|cutFadeOut|cutObj|cutRsc|cutText|damage|date|dateToNumber|daytime|deActivateKey|debriefingText|debugFSM|debugLog|deg|deleteAt|deleteCenter|deleteCollection|deleteEditorObject|deleteGroup|deleteIdentity|deleteLocation|deleteMarker|deleteMarkerLocal|deleteRange|deleteResources|deleteSite|deleteStatus|deleteTeam|deleteVehicle|deleteVehicleCrew|deleteWaypoint|detach|detectedMines|diag_activeMissionFSMs|diag_activeSQFScripts|diag_activeSQSScripts|diag_captureFrame|diag_captureSlowFrame|diag_fps|diag_fpsmin|diag_frameno|diag_log|diag_logSlowFrame|diag_tickTime|dialog|diarySubjectExists|didJIP|didJIPOwner|difficulty|difficultyEnabled|difficultyEnabledRTD|direction|directSay|disableAI|disableCollisionWith|disableConversation|disableDebriefingStats|disableSerialization|disableTIEquipment|disableUAVConnectability|disableUserInput|displayAddEventHandler|displayCtrl|displayNull|displayRemoveAllEventHandlers|displayRemoveEventHandler|displaySetEventHandler|dissolveTeam|distance|distance2D|distanceSqr|distributionRegion|doArtilleryFire|doFire|doFollow|doFSM|doGetOut|doMove|doorPhase|doStop|doTarget|doWatch|drawArrow|drawEllipse|drawIcon|drawIcon3D|drawLine|drawLine3D|drawLink|drawLocation|drawRectangle|driver|drop|east|echo|editObject|editorSetEventHandler|effectiveCommander|emptyPositions|enableAI|enableAIFeature|enableAttack|enableCamShake|enableCaustics|enableCollisionWith|enableCopilot|enableDebriefingStats|enableDiagLegend|enableEndDialog|enableEngineArtillery|enableEnvironment|enableFatigue|enableGunLights|enableIRLasers|enableMimics|enablePersonTurret|enableRadio|enableReload|enableRopeAttach|enableSatNormalOnDetail|enableSaving|enableSentences|enableSimulation|enableSimulationGlobal|enableTeamSwitch|enableUAVConnectability|endLoadingScreen|endMission|engineOn|enginesIsOnRTD|enginesRpmRTD|enginesTorqueRTD|entities|estimatedEndServerTime|estimatedTimeLeft|evalObjectArgument|everyBackpack|everyContainer|execEditorScript|execFSM|exp|expectedDestination|eyeDirection|eyePos|face|faction|fadeMusic|fadeRadio|fadeSound|fadeSpeech|failMission|fillWeaponsFromPool|find|findCover|findDisplay|findEditorObject|findEmptyPosition|findEmptyPositionReady|findNearestEnemy|finishMissionInit|finite|fire|fireAtTarget|firstBackpack|flag|flagOwner|fleeing|floor|flyInHeight|fog|fogForecast|fogParams|forceAddUniform|forceEnd|forceMap|forceRespawn|forceSpeed|forceWalk|forceWeaponFire|forceWeatherChange|forEachMember|forEachMemberAgent|forEachMemberTeam|format|formation|formationDirection|formationLeader|formationMembers|formationPosition|formationTask|formatText|formLeader|freeLook|fromEditor|fuel|fullCrew|gearSlotAmmoCount|gearSlotData|getAllHitPointsDamage|getAmmoCargo|getArray|getArtilleryAmmo|getArtilleryComputerSettings|getArtilleryETA|getAssignedCuratorLogic|getAssignedCuratorUnit|getBackpackCargo|getBleedingRemaining|getBurningValue|getCargoIndex|getCenterOfMass|getChosenCont|getClientState|getConnectedUAV|getDammage|getDescription|getDir|getDirVisual|getDLCs|getEditorCamera|getEditorMode|getEditorObjectScope|getElevationOffset|getFatigue|getFriend|getFSMVariable|getFuelCargo|getGroupIcon|getGroupIconParams|getGroupIcons|getHideFrom|getHit|getHitIndex|getHitPointDamage|getItemCargo|getMagazineCargo|getMarkerColor|getMarkerPos|getMarkerSize|getMarkerType|getMass|getModelInfo|getNumber|getObjectArgument|getObjectChildren|getObjectDLCs|getObjectMaterials|getObjectProxy|getObjectTextures|getObjectType|getOxygenRemaining|getPersonUsedDLCs|getPlayerUID|getPos|getPosASL|getPosASLVisual|getPosASLW|getPosATL|getPosATLVisual|getPosVisual|getPosWorld|getRepairCargo|getResolution|getShadowDistance|getSlingLoad|getSpeed|getTerrainHeightASL|getText|getVariable|getWeaponCargo|getWPPos|glanceAt|globalChat|globalRadio|goggles|goto|group|groupChat|groupFromNetId|groupIconSelectable|groupIconsVisible|groupID|groupRadio|groupSelectedUnits|groupSelectUnit|grpNull|gunner|gusts|halt|handgunItems|handgunMagazine|handgunWeapon|handsHit|hasInterface|hasWeapon|hcAllGroups|hcGroupParams|hcLeader|hcRemoveAllGroups|hcRemoveGroup|hcSelected|hcSelectGroup|hcSetGroup|hcShowBar|hcShownBar|headgear|hideBody|hideObject|hideObjectGlobal|hint|hintC|hintCadet|hintSilent|hmd|hostMission|htmlLoad|HUDMovementLevels|humidity|image|importAllGroups|importance|in|incapacitatedState|independent|inflame|inflamed|inGameUISetEventHandler|inheritsFrom|initAmbientLife|inputAction|inRangeOfArtillery|insertEditorObject|intersect|isAbleToBreathe|isAgent|isArray|isAutoHoverOn|isAutonomous|isAutotest|isBleeding|isBurning|isClass|isCollisionLightOn|isCopilotEnabled|isDedicated|isDLCAvailable|isEngineOn|isEqualTo|isFlashlightOn|isFlatEmpty|isForcedWalk|isFormationLeader|isHidden|isInRemainsCollector|isInstructorFigureEnabled|isIRLaserOn|isKeyActive|isKindOf|isLightOn|isLocalized|isManualFire|isMarkedForCollection|isMultiplayer|isNil|isNull|isNumber|isObjectRTD|isOnRoad|isPipEnabled|isPlayer|isRealTime|isServer|isShowing3DIcons|isSteamMission|isStreamFriendlyUIEnabled|isText|isTouchingGround|isTutHintsEnabled|isUAVConnectable|isUAVConnected|isUniformAllowed|isWalking|itemCargo|items|itemsWithMagazines|join|joinAs|joinAsSilent|joinSilent|joinString|kbAddDatabase|kbAddDatabaseTargets|kbAddTopic|kbHasTopic|kbReact|kbRemoveTopic|kbTell|kbWasSaid|keyImage|keyName|knowsAbout|land|landAt|landResult|language|laserTarget|lbAdd|lbClear|lbColor|lbCurSel|lbData|lbDelete|lbIsSelected|lbPicture|lbSelection|lbSetColor|lbSetCurSel|lbSetData|lbSetPicture|lbSetPictureColor|lbSetPictureColorDisabled|lbSetPictureColorSelected|lbSetSelected|lbSetTooltip|lbSetValue|lbSize|lbSort|lbSortByValue|lbText|lbValue|leader|leaveVehicle|libraryCredits|libraryDisclaimers|lifeState|lightAttachObject|lightDetachObject|lightIsOn|lightnings|limitSpeed|linearConversion|lineBreak|lineIntersects|lineIntersectsObjs|lineIntersectsSurfaces|lineIntersectsWith|linkItem|list|listObjects|ln|lnbAddArray|lnbAddColumn|lnbAddRow|lnbClear|lnbColor|lnbCurSelRow|lnbData|lnbDeleteColumn|lnbDeleteRow|lnbGetColumnsPosition|lnbPicture|lnbSetColor|lnbSetColumnsPos|lnbSetCurSelRow|lnbSetData|lnbSetPicture|lnbSetText|lnbSetValue|lnbSize|lnbText|lnbValue|load|loadAbs|loadBackpack|loadFile|loadGame|loadIdentity|loadMagazine|loadOverlay|loadStatus|loadUniform|loadVest|local|localize|locationNull|locationPosition|lock|lockCameraTo|lockCargo|lockDriver|locked|lockedCargo|lockedDriver|lockedTurret|lockTurret|lockWP|log|logEntities|lookAt|lookAtPos|magazineCargo|magazines|magazinesAmmo|magazinesAmmoCargo|magazinesAmmoFull|magazinesDetail|magazinesDetailBackpack|magazinesDetailUniform|magazinesDetailVest|magazinesTurret|magazineTurretAmmo|mapAnimAdd|mapAnimClear|mapAnimCommit|mapAnimDone|mapCenterOnCamera|mapGridPosition|markAsFinishedOnSteam|markerAlpha|markerBrush|markerColor|markerDir|markerPos|markerShape|markerSize|markerText|markerType|max|members|min|mineActive|mineDetectedBy|missionConfigFile|missionName|missionNamespace|missionStart|mod|modelToWorld|modelToWorldVisual|moonIntensity|morale|move|moveInAny|moveInCargo|moveInCommander|moveInDriver|moveInGunner|moveInTurret|moveObjectToEnd|moveOut|moveTime|moveTo|moveToCompleted|moveToFailed|musicVolume|name|nameSound|nearEntities|nearestBuilding|nearestLocation|nearestLocations|nearestLocationWithDubbing|nearestObject|nearestObjects|nearObjects|nearObjectsReady|nearRoads|nearSupplies|nearTargets|needReload|netId|netObjNull|newOverlay|nextMenuItemIndex|nextWeatherChange|nMenuItems|numberToDate|objectCurators|objectFromNetId|objectParent|objNull|objStatus|onBriefingGroup|onBriefingNotes|onBriefingPlan|onBriefingTeamSwitch|onCommandModeChanged|onDoubleClick|onEachFrame|onGroupIconClick|onGroupIconOverEnter|onGroupIconOverLeave|onHCGroupSelectionChanged|onMapSingleClick|onPlayerConnected|onPlayerDisconnected|onPreloadFinished|onPreloadStarted|onShowNewObject|onTeamSwitch|openCuratorInterface|openMap|openYoutubeVideo|opfor|orderGetIn|overcast|overcastForecast|owner|parseNumber|parseText|parsingNamespace|particlesQuality|pickWeaponPool|pitch|playableSlotsNumber|playableUnits|playAction|playActionNow|player|playerRespawnTime|playerSide|playersNumber|playGesture|playMission|playMove|playMoveNow|playMusic|playScriptedMission|playSound|playSound3D|plus|position|positionCameraToWorld|posScreenToWorld|posWorldToScreen|ppEffectAdjust|ppEffectCommit|ppEffectCommitted|ppEffectCreate|ppEffectDestroy|ppEffectEnable|ppEffectForceInNVG|precision|preloadCamera|preloadObject|preloadSound|preloadTitleObj|preloadTitleRsc|preprocessFileLineNumbers|primaryWeapon|primaryWeaponItems|primaryWeaponMagazine|priority|processDiaryLink|productVersion|profileName|profileNamespace|progressLoadingScreen|progressPosition|progressSetPosition|publicVariable|publicVariableClient|publicVariableServer|pushBack|putWeaponPool|queryItemsPool|queryMagazinePool|queryWeaponPool|rad|radioChannelAdd|radioChannelCreate|radioChannelRemove|radioChannelSetCallSign|radioChannelSetLabel|radioVolume|rain|rainbow|random|rank|rankId|rating|rectangular|registeredTasks|registerTask|reload|reloadEnabled|remoteControl|remoteExec|removeAction|removeAllActions|removeAllAssignedItems|removeAllContainers|removeAllCuratorAddons|removeAllCuratorCameraAreas|removeAllCuratorEditingAreas|removeAllEventHandlers|removeAllHandgunItems|removeAllItems|removeAllItemsWithMagazines|removeAllMissionEventHandlers|removeAllMPEventHandlers|removeAllMusicEventHandlers|removeAllPrimaryWeaponItems|removeAllWeapons|removeBackpack|removeBackpackGlobal|removeCuratorAddons|removeCuratorCameraArea|removeCuratorEditableObjects|removeCuratorEditingArea|removeDrawIcon|removeDrawLinks|removeEventHandler|removeFromRemainsCollector|removeGoggles|removeGroupIcon|removeHandgunItem|removeHeadgear|removeItem|removeItemFromBackpack|removeItemFromUniform|removeItemFromVest|removeItems|removeMagazine|removeMagazineGlobal|removeMagazines|removeMagazinesTurret|removeMagazineTurret|removeMenuItem|removeMissionEventHandler|removeMPEventHandler|removeMusicEventHandler|removePrimaryWeaponItem|removeSecondaryWeaponItem|removeSimpleTask|removeSwitchableUnit|removeTeamMember|removeUniform|removeVest|removeWeapon|removeWeaponGlobal|removeWeaponTurret|requiredVersion|resetCamShake|resetSubgroupDirection|resistance|resize|resources|respawnVehicle|restartEditorCamera|reveal|revealMine|reverse|reversedMouseY|roadsConnectedTo|ropeAttachedObjects|ropeAttachedTo|ropeAttachEnabled|ropeAttachTo|ropeCreate|ropeCut|ropeEndPosition|ropeLength|ropes|ropeUnwind|ropeUnwound|rotorsForcesRTD|rotorsRpmRTD|round|runInitScript|safeZoneH|safeZoneW|safeZoneWAbs|safeZoneX|safeZoneXAbs|safeZoneY|saveGame|saveIdentity|saveJoysticks|saveOverlay|saveProfileNamespace|saveStatus|saveVar|savingEnabled|say|say2D|say3D|scopeName|score|scoreSide|screenToWorld|scriptDone|scriptName|scriptNull|scudState|secondaryWeapon|secondaryWeaponItems|secondaryWeaponMagazine|select|selectBestPlaces|selectDiarySubject|selectedEditorObjects|selectEditorObject|selectionPosition|selectLeader|selectNoPlayer|selectPlayer|selectWeapon|selectWeaponTurret|sendAUMessage|sendSimpleCommand|sendTask|sendTaskResult|sendUDPMessage|serverCommand|serverCommandAvailable|serverCommandExecutable|serverTime|set|setAccTime|setAirportSide|setAmmo|setAmmoCargo|setAperture|setApertureNew|setArmoryPoints|setAttributes|setAutonomous|setBehaviour|setBleedingRemaining|setCameraInterest|setCamShakeDefParams|setCamShakeParams|setCamUseTi|setCaptive|setCenterOfMass|setCollisionLight|setCombatMode|setCompassOscillation|setCuratorCameraAreaCeiling|setCuratorCoef|setCuratorEditingAreaType|setCuratorWaypointCost|setCurrentTask|setCurrentWaypoint|setDamage|setDammage|setDate|setDebriefingText|setDefaultCamera|setDestination|setDir|setDirection|setDrawIcon|setDropInterval|setEditorMode|setEditorObjectScope|setEffectCondition|setFace|setFaceAnimation|setFatigue|setFlagOwner|setFlagSide|setFlagTexture|setFog|setFormation|setFormationTask|setFormDir|setFriend|setFromEditor|setFSMVariable|setFuel|setFuelCargo|setGroupIcon|setGroupIconParams|setGroupIconsSelectable|setGroupIconsVisible|setGroupId|setGusts|setHideBehind|setHit|setHitIndex|setHitPointDamage|setHorizonParallaxCoef|setHUDMovementLevels|setIdentity|setImportance|setLeader|setLightAmbient|setLightAttenuation|setLightBrightness|setLightColor|setLightDayLight|setLightFlareMaxDistance|setLightFlareSize|setLightIntensity|setLightnings|setLightUseFlare|setLocalWindParams|setMagazineTurretAmmo|setMarkerAlpha|setMarkerAlphaLocal|setMarkerBrush|setMarkerBrushLocal|setMarkerColor|setMarkerColorLocal|setMarkerDir|setMarkerDirLocal|setMarkerPos|setMarkerPosLocal|setMarkerShape|setMarkerShapeLocal|setMarkerSize|setMarkerSizeLocal|setMarkerText|setMarkerTextLocal|setMarkerType|setMarkerTypeLocal|setMass|setMimic|setMousePosition|setMusicEffect|setMusicEventHandler|setName|setNameSound|setObjectArguments|setObjectMaterial|setObjectProxy|setObjectTexture|setObjectTextureGlobal|setObjectViewDistance|setOvercast|setOwner|setOxygenRemaining|setParticleCircle|setParticleClass|setParticleFire|setParticleParams|setParticleRandom|setPilotLight|setPiPEffect|setPitch|setPlayable|setPlayerRespawnTime|setPos|setPosASL|setPosASL2|setPosASLW|setPosATL|setPosition|setPosWorld|setRadioMsg|setRain|setRainbow|setRandomLip|setRank|setRectangular|setRepairCargo|setShadowDistance|setSide|setSimpleTaskDescription|setSimpleTaskDestination|setSimpleTaskTarget|setSimulWeatherLayers|setSize|setSkill|setSlingLoad|setSoundEffect|setSpeaker|setSpeech|setSpeedMode|setStatValue|setSystemOfUnits|setTargetAge|setTaskResult|setTaskState|setTerrainGrid|setText|setTimeMultiplier|setTitleEffect|setTriggerActivation|setTriggerArea|setTriggerStatements|setTriggerText|setTriggerTimeout|setTriggerType|setType|setUnconscious|setUnitAbility|setUnitPos|setUnitPosWeak|setUnitRank|setUnitRecoilCoefficient|setUnloadInCombat|setUserActionText|setVariable|setVectorDir|setVectorDirAndUp|setVectorUp|setVehicleAmmo|setVehicleAmmoDef|setVehicleArmor|setVehicleId|setVehicleLock|setVehiclePosition|setVehicleTiPars|setVehicleVarName|setVelocity|setVelocityTransformation|setViewDistance|setVisibleIfTreeCollapsed|setWaves|setWaypointBehaviour|setWaypointCombatMode|setWaypointCompletionRadius|setWaypointDescription|setWaypointFormation|setWaypointHousePosition|setWaypointLoiterRadius|setWaypointLoiterType|setWaypointName|setWaypointPosition|setWaypointScript|setWaypointSpeed|setWaypointStatements|setWaypointTimeout|setWaypointType|setWaypointVisible|setWeaponReloadingTime|setWind|setWindDir|setWindForce|setWindStr|setWPPos|show3DIcons|showChat|showCinemaBorder|showCommandingMenu|showCompass|showCuratorCompass|showGPS|showHUD|showLegend|showMap|shownArtilleryComputer|shownChat|shownCompass|shownCuratorCompass|showNewEditorObject|shownGPS|shownMap|shownPad|shownRadio|shownUAVFeed|shownWarrant|shownWatch|showPad|showRadio|showSubtitles|showUAVFeed|showWarrant|showWatch|showWaypoint|side|sideChat|sideEnemy|sideFriendly|sideLogic|sideRadio|sideUnknown|simpleTasks|simulationEnabled|simulCloudDensity|simulCloudOcclusion|simulInClouds|simulWeatherSync|sin|size|sizeOf|skill|skillFinal|skipTime|sleep|sliderPosition|sliderRange|sliderSetPosition|sliderSetRange|sliderSetSpeed|sliderSpeed|slingLoadAssistantShown|soldierMagazines|someAmmo|sort|soundVolume|speaker|speed|speedMode|splitString|sqrt|squadParams|stance|startLoadingScreen|stop|stopped|str|sunOrMoon|supportInfo|suppressFor|surfaceIsWater|surfaceNormal|surfaceType|swimInDepth|switchableUnits|switchAction|switchCamera|switchGesture|switchLight|switchMove|synchronizedObjects|synchronizedTriggers|synchronizedWaypoints|synchronizeObjectsAdd|synchronizeObjectsRemove|synchronizeTrigger|synchronizeWaypoint|systemChat|systemOfUnits|tan|targetsAggregate|targetKnowledge|targetsQuery|taskChildren|taskCompleted|taskDescription|taskDestination|taskHint|taskNull|taskParent|taskResult|taskState|teamMember|teamMemberNull|teamName|teams|teamSwitch|teamSwitchEnabled|teamType|terminate|terrainIntersect|terrainIntersectASL|text|textLog|textLogFormat|tg|time|timeMultiplier|titleCut|titleFadeOut|titleObj|titleRsc|titleText|toArray|toLower|toString|toUpper|triggerActivated|triggerActivation|triggerArea|triggerAttachedVehicle|triggerAttachObject|triggerAttachVehicle|triggerStatements|triggerText|triggerTimeout|triggerTimeoutCurrent|triggerType|turretLocal|turretOwner|turretUnit|tvAdd|tvClear|tvCollapse|tvCount|tvCurSel|tvData|tvDelete|tvExpand|tvPicture|tvSetCurSel|tvSetData|tvSetPicture|tvSetValue|tvSort|tvSortByValue|tvText|tvValue|type|typeName|typeOf|UAVControl|uiNamespace|uiSleep|unassignCurator|unassignItem|unassignTeam|unassignVehicle|underwater|uniform|uniformContainer|uniformItems|uniformMagazines|unitAddons|unitBackpack|unitPos|unitReady|unitRecoilCoefficient|units|unitsBelowHeight|unlinkItem|unlockAchievement|unregisterTask|updateDrawIcon|updateMenuItem|updateObjectTree|useAudioTimeForMoves|vectorAdd|vectorCos|vectorCrossProduct|vectorDiff|vectorDir|vectorDirVisual|vectorDistance|vectorDistanceSqr|vectorDotProduct|vectorFromTo|vectorMagnitude|vectorMagnitudeSqr|vectorMultiply|vectorNormalized|vectorUp|vectorUpVisual|vehicle|vehicleChat|vehicleRadio|vehicles|vehicleVarName|velocity|velocityModelSpace|verifySignature|vest|vestContainer|vestItems|vestMagazines|viewDistance|visibleCompass|visibleGPS|visibleMap|visiblePosition|visiblePositionASL|visibleWatch|waitUntil|waves|waypointAttachedObject|waypointAttachedVehicle|waypointAttachObject|waypointAttachVehicle|waypointBehaviour|waypointCombatMode|waypointCompletionRadius|waypointDescription|waypointFormation|waypointHousePosition|waypointLoiterRadius|waypointLoiterType|waypointName|waypointPosition|waypoints|waypointScript|waypointShow|waypointSpeed|waypointStatements|waypointTimeout|waypointTimeoutCurrent|waypointType|waypointVisible|weaponAccessories|weaponCargo|weaponDirection|weaponLowered|weapons|weaponsItems|weaponsItemsCargo|weaponState|weaponsTurret|weightRTD|west|WFSideText|wind|windDir|windStr|worldName|worldToModel|worldToModelVisual|worldToScreen)\b/,
            caseInsensitive: true
        }, {
            token: "constant.numeric.sqf",
            regex: /\b0x[a-fA-F\d]+|\b\d+(?:\.\d+)?(?:[eE]-?\d+)?|\.\d+(?:[eE]-?\d+)?/
        }, {
            token: "keyword.operator.comparison.sqf",
            regex: /<\=|>\=|\=\=|<|>|\!\=|!/
        }, {
            token: "keyword.operator.arithmetic.sqf",
            regex: /\+|\-|%|<<|>>|&|\||\^|~/
        }, {
            token: "keyword.operator.assignment.sqf",
            regex: /\=/
        }, {
            token: "punctuation.definition.comment.sqf",
            regex: /\/\//,
            push: [{
                token: "comment.line.sqf",
                regex: /$/,
                next: "pop"
            }, {
                defaultToken: "comment.line.sqf"
            }]
        }, {
            token: "punctuation.definition.comment.sqf",
            regex: /\/\*/,
            push: [{
                token: "punctuation.definition.comment.sqf",
                regex: /\*\//,
                next: "pop"
            }, {
                defaultToken: "comment.block.sqf"
            }]
        }, {
            token: "punctuation.definition.string.begin.sqf",
            regex: /"/,
            push: [{
                token: "punctuation.definition.string.end.sqf",
                regex: /"/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.double.sqf"
            }]
        }, {
            token: "punctuation.definition.string.begin.sqf",
            regex: /#x/,
            push: [{
                token: "punctuation.definition.string.end.sqf",
                regex: /x#/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.double.sqf"
            }]
        }, {
            token: "punctuation.definition.string.begin.sqf",
            regex: /'/,
            push: [{
                token: "punctuation.definition.string.end.sqf",
                regex: /'/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.sqf"
            }]
        }, {
            token: "punctuation.definition.string.begin.sqf",
            regex: /@"/,
            push: [{
                token: "punctuation.definition.string.end.sqf",
                regex: /"@/,
                next: "pop"
            }, {
                defaultToken: "string.quoted.region.sqf"
            }]
        }, {
            token: "variable.other.sqf",
            regex: /\b_[a-zA-Z0-9][a-zA-Z0-9_]*/
        }, {
            token: "constant.other.sqf",
            regex: /\b__[a-zA-Z0-9][a-zA-Z0-9_]*/
        }]
    }

    this.normalizeRules();
};

SQFHighlightRules.metaData = {
    name: "SQF",
    fileTypes: ["sqf", "sqs", "sqm"],
    scopeName: "source.sqf",
    firstLineMatch: "//\\s*(?i:SQF)",
    foldingStartMarker: "(\\{\\s*(#.*)?$)",
    foldingStopMarker: "^\\s*(\\})"
}


oop.inherits(SQFHighlightRules, TextHighlightRules);

exports.SQFHighlightRules = SQFHighlightRules;
});

define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"], function(require, exports, module) {
"use strict";

var oop = require("../../lib/oop");
var Range = require("../../range").Range;
var BaseFoldMode = require("./fold_mode").FoldMode;

var FoldMode = exports.FoldMode = function(commentRegex) {
    if (commentRegex) {
        this.foldingStartMarker = new RegExp(
            this.foldingStartMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.start)
        );
        this.foldingStopMarker = new RegExp(
            this.foldingStopMarker.source.replace(/\|[^|]*?$/, "|" + commentRegex.end)
        );
    }
};
oop.inherits(FoldMode, BaseFoldMode);

(function() {

    this.foldingStartMarker = /(\{|\[)[^\}\]]*$|^\s*(\/\*)/;
    this.foldingStopMarker = /^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/;
    this.singleLineBlockCommentRe= /^\s*(\/\*).*\*\/\s*$/;
    this.tripleStarBlockCommentRe = /^\s*(\/\*\*\*).*\*\/\s*$/;
    this.startRegionRe = /^\s*(\/\*|\/\/)#?region\b/;
    this._getFoldWidgetBase = this.getFoldWidget;
    this.getFoldWidget = function(session, foldStyle, row) {
        var line = session.getLine(row);

        if (this.singleLineBlockCommentRe.test(line)) {
            if (!this.startRegionRe.test(line) && !this.tripleStarBlockCommentRe.test(line))
                return "";
        }

        var fw = this._getFoldWidgetBase(session, foldStyle, row);

        if (!fw && this.startRegionRe.test(line))
            return "start"; // lineCommentRegionStart

        return fw;
    };

    this.getFoldWidgetRange = function(session, foldStyle, row, forceMultiline) {
        var line = session.getLine(row);

        if (this.startRegionRe.test(line))
            return this.getCommentRegionBlock(session, line, row);

        var match = line.match(this.foldingStartMarker);
        if (match) {
            var i = match.index;

            if (match[1])
                return this.openingBracketBlock(session, match[1], row, i);

            var range = session.getCommentFoldRange(row, i + match[0].length, 1);

            if (range && !range.isMultiLine()) {
                if (forceMultiline) {
                    range = this.getSectionRange(session, row);
                } else if (foldStyle != "all")
                    range = null;
            }

            return range;
        }

        if (foldStyle === "markbegin")
            return;

        var match = line.match(this.foldingStopMarker);
        if (match) {
            var i = match.index + match[0].length;

            if (match[1])
                return this.closingBracketBlock(session, match[1], row, i);

            return session.getCommentFoldRange(row, i, -1);
        }
    };

    this.getSectionRange = function(session, row) {
        var line = session.getLine(row);
        var startIndent = line.search(/\S/);
        var startRow = row;
        var startColumn = line.length;
        row = row + 1;
        var endRow = row;
        var maxRow = session.getLength();
        while (++row < maxRow) {
            line = session.getLine(row);
            var indent = line.search(/\S/);
            if (indent === -1)
                continue;
            if  (startIndent > indent)
                break;
            var subRange = this.getFoldWidgetRange(session, "all", row);

            if (subRange) {
                if (subRange.start.row <= startRow) {
                    break;
                } else if (subRange.isMultiLine()) {
                    row = subRange.end.row;
                } else if (startIndent == indent) {
                    break;
                }
            }
            endRow = row;
        }

        return new Range(startRow, startColumn, endRow, session.getLine(endRow).length);
    };
    this.getCommentRegionBlock = function(session, line, row) {
        var startColumn = line.search(/\s*$/);
        var maxRow = session.getLength();
        var startRow = row;

        var re = /^\s*(?:\/\*|\/\/|--)#?(end)?region\b/;
        var depth = 1;
        while (++row < maxRow) {
            line = session.getLine(row);
            var m = re.exec(line);
            if (!m) continue;
            if (m[1]) depth--;
            else depth++;

            if (!depth) break;
        }

        var endRow = row;
        if (endRow > startRow) {
            return new Range(startRow, startColumn, endRow, line.length);
        }
    };

}).call(FoldMode.prototype);

});

define("ace/mode/sqf",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sqf_highlight_rules","ace/mode/folding/cstyle"], function(require, exports, module) {
"use strict";

var oop = require("../lib/oop");
var TextMode = require("./text").Mode;
var SQFHighlightRules = require("./sqf_highlight_rules").SQFHighlightRules;
var FoldMode = require("./folding/cstyle").FoldMode;

var Mode = function() {
    this.HighlightRules = SQFHighlightRules;
    this.foldingRules = new FoldMode();
};
oop.inherits(Mode, TextMode);

(function() {
    this.$id = "ace/mode/sqf"
}).call(Mode.prototype);

exports.Mode = Mode;
});
