const CONFIG = window.CONFIG = {

	/**
	 * Configure debugging flags to display additional information
	 */
	debug: {
		dice: false,
		documents: false,
		fog: false,
		hooks: false,
		av: false,
		avclient: false,
		mouseInteraction: false,
		time: false,
		keybindings: false,
		polygons: false,
		gamepad: false
	},

	/**
	 * Configure the DatabaseBackend used to perform Document operations
	 * @type {ClientDatabaseBackend}
	 */
	DatabaseBackend: new ClientDatabaseBackend(),

	/**
	 * Configuration for the Actor document
	 */
	Actor: {
		documentClass: Actor,
		collection: Actors,
		sidebarIcon: "fas fa-user",
		typeLabels: {}
	},

	/**
	 * Configuration for the Adventure document.
	 * Currently for internal use only.
	 * @private
	 */
	Adventure: {
		documentClass: foundry.documents.BaseAdventure
	},

	/**
	 * Configuration for the Cards primary Document type
	 */
	Cards: {
		collection: CardStacks,
		documentClass: Cards,
		sidebarIcon: "fas fa-id-badge",
		presets: {
			pokerDark: {
				type: "deck",
				label: "CARDS.DeckPresetPokerDark",
				src: "cards/poker-deck-dark.json"
			},
			pokerLight: {
				type: "deck",
				label: "CARDS.DeckPresetPokerLight",
				src: "cards/poker-deck-light.json"
			},
		}
	},

	/**
	 * Configuration for the ChatMessage document
	 */
	ChatMessage: {
		documentClass: ChatMessage,
		collection: Messages,
		template: "templates/sidebar/chat-message.html",
		sidebarIcon: "fas fa-comments",
		batchSize: 100
	},

	/**
	 * Configuration for the Combat document
	 */
	Combat: {
		documentClass: Combat,
		collection: CombatEncounters,
		defeatedStatusId: "dead",
		sidebarIcon: "fas fa-fist-raised",
		initiative: {
			formula: null,
			decimals: 2
		}
	},

	/**
	 * Configuration for dice rolling behaviors in the Foundry VTT client
	 * @type {Object}
	 */
	Dice: {
		types: [Die, FateDie],
		rollModes: Object.entries(CONST.DICE_ROLL_MODES).reduce((obj, e) => {
			let [k, v] = e;
			obj[v] = `CHAT.Roll${k.titleCase()}`;
			return obj;
		}, {}),
		rolls: [Roll],
		termTypes: {DiceTerm, MathTerm, NumericTerm, OperatorTerm, ParentheticalTerm, PoolTerm, StringTerm},
		terms: {
			"c": Coin,
			"d": Die,
			"f": FateDie
		},
		randomUniform: MersenneTwister.random
	},

	/**
	 * Configuration for the FogExploration document
	 */
	FogExploration: {
		documentClass: FogExploration,
		collection: FogExplorations
	},

	/**
	 * Configuration for the Folder document
	 */
	Folder: {
		documentClass: Folder,
		collection: Folders,
		sidebarIcon: "fas fa-folder"
	},

	/**
	 * Configuration for Item document
	 */
	Item: {
		documentClass: Item,
		collection: Items,
		sidebarIcon: "fas fa-suitcase",
		typeLabels: {}
	},

	/**
	 * Configuration for the JournalEntry document
	 */
	JournalEntry: {
		documentClass: JournalEntry,
		collection: Journal,
		noteIcons: {
			"Anchor": "icons/svg/anchor.svg",
			"Barrel": "icons/svg/barrel.svg",
			"Book": "icons/svg/book.svg",
			"Bridge": "icons/svg/bridge.svg",
			"Cave": "icons/svg/cave.svg",
			"Castle": "icons/svg/castle.svg",
			"Chest": "icons/svg/chest.svg",
			"City": "icons/svg/city.svg",
			"Coins": "icons/svg/coins.svg",
			"Fire": "icons/svg/fire.svg",
			"Hanging Sign": "icons/svg/hanging-sign.svg",
			"House": "icons/svg/house.svg",
			"Mountain": "icons/svg/mountain.svg",
			"Oak Tree": "icons/svg/oak.svg",
			"Obelisk": "icons/svg/obelisk.svg",
			"Pawprint": "icons/svg/pawprint.svg",
			"Ruins": "icons/svg/ruins.svg",
			"Tankard": "icons/svg/tankard.svg",
			"Temple": "icons/svg/temple.svg",
			"Tower": "icons/svg/tower.svg",
			"Trap": "icons/svg/trap.svg",
			"Skull": "icons/svg/skull.svg",
			"Statue": "icons/svg/statue.svg",
			"Sword": "icons/svg/sword.svg",
			"Village": "icons/svg/village.svg",
			"Waterfall": "icons/svg/waterfall.svg",
			"Windmill": "icons/svg/windmill.svg"
		},
		sidebarIcon: "fas fa-book-open"
	},

	/**
	 * Configuration for the Macro document
	 */
	Macro: {
		documentClass: Macro,
		collection: Macros,
		sidebarIcon: "fas fa-code"
	},

	/**
	 * Configuration for the Playlist document
	 */
	Playlist: {
		documentClass: Playlist,
		collection: Playlists,
		sidebarIcon: "fas fa-music",
		autoPreloadSeconds: 20
	},

	/**
	 * Configuration for RollTable random draws
	 */
	RollTable: {
		documentClass: RollTable,
		collection: RollTables,
		sidebarIcon: "fas fa-th-list",
		resultIcon: "icons/svg/d20-black.svg",
		resultTemplate: "templates/dice/table-result.html"
	},

	/**
	 * Configuration for the Scene document
	 */
	Scene: {
		documentClass: Scene,
		collection: Scenes,
		sidebarIcon: "fas fa-map"
	},

	Setting: {
		documentClass: Setting,
		collection: WorldSettings,
	},

	/**
	 * Configuration for the User document
	 */
	User: {
		documentClass: User,
		collection: Users
	},

	/* -------------------------------------------- */
	/*  Canvas                                      */
	/* -------------------------------------------- */

	/**
	 * Configuration settings for the Canvas and its contained layers and objects
	 * @type {Object}
	 */
	Canvas: {
		blurStrength: 8,
		cullingBackend: ScreenCulling,
		darknessColor: 0x242448,
		darknessLightPenalty: 0.25,
		daylightColor: 0xEEEEEE,
		dispositionColors: {
			HOSTILE: 0xE72124,
			NEUTRAL: 0xF1D836,
			FRIENDLY: 0x43DFDF,
			INACTIVE: 0x555555,
			PARTY: 0x33BC4E,
			CONTROLLED: 0xFF9829
		},
		exploredColor: 0x7f7f7f,
		unexploredColor: 0x000000,
		groups: {
			primary: {
				groupClass: PrimaryCanvasGroup
			},
			effects: {
				groupClass: EffectsCanvasGroup
			},
			interface: {
				groupClass: InterfaceCanvasGroup
			}
		},
		layers : {
			background: {
				layerClass: BackgroundLayer,
				group: "primary"
			},
			drawings: {
				layerClass: DrawingsLayer,
				group: "primary"
			},
			grid: {
				layerClass: GridLayer,
				group: "primary"
			},
			templates: {
				layerClass: TemplateLayer,
				group: "primary"
			},
			tokens: {
				layerClass: TokenLayer,
				group: "primary"
			},
			foreground: {
				layerClass: ForegroundLayer,
				group: "primary"
			},
			walls: { // FIXME - this should be in the interface group, but the initialization order is currently bad. Quadtree is required for later layers
				layerClass: WallsLayer,
				group: "effects"
			},
			lighting: {
				layerClass: LightingLayer,
				group: "effects"
			},
			weather: {
				layerClass: WeatherLayer,
				group: "effects"
			},
			sight: {
				layerClass: SightLayer,
				group: "effects"
			},
			sounds: {
				layerClass: SoundsLayer,
				group: "interface"
			},
			notes: {
				layerClass: NotesLayer,
				group: "interface"
			},
			controls: {
				layerClass: ControlsLayer,
				group: "interface"
			}
		},
		lightLevels: {
			dark: 0,
			dim: 0.25,
			bright: 1.0
		},
		losBackend: ClockwiseSweepPolygon,
		normalLightColor: 0xb86200,
		maxZoom: 3.0,
		objectBorderThickness: 4,
		lightAnimations: {
			"torch": {
				label: "LIGHT.AnimationTorch",
				animation: LightSource.prototype.animateTorch,
				illuminationShader: TorchIlluminationShader,
				colorationShader: TorchColorationShader
			},
			"pulse": {
				label: "LIGHT.AnimationPulse",
				animation: LightSource.prototype.animatePulse,
				illuminationShader: PulseIlluminationShader,
				colorationShader: PulseColorationShader
			},
			"chroma": {
				label: "LIGHT.AnimationChroma",
				animation: LightSource.prototype.animateTime,
				colorationShader: ChromaColorationShader
			},
			"wave": {
				label: "LIGHT.AnimationWave",
				animation: LightSource.prototype.animateTime,
				illuminationShader: WaveIlluminationShader,
				colorationShader: WaveColorationShader
			},
			"fog": {
				label: "LIGHT.AnimationFog",
				animation: LightSource.prototype.animateTime,
				colorationShader: FogColorationShader
			},
			"sunburst": {
				label: "LIGHT.AnimationSunburst",
				animation: LightSource.prototype.animateTime,
				illuminationShader: SunburstIlluminationShader,
				colorationShader: SunburstColorationShader
			},
			"dome": {
				label: "LIGHT.AnimationLightDome",
				animation: LightSource.prototype.animateTime,
				colorationShader: LightDomeColorationShader
			},
			"emanation": {
				label: "LIGHT.AnimationEmanation",
				animation: LightSource.prototype.animateTime,
				colorationShader: EmanationColorationShader
			},
			"hexa": {
				label: "LIGHT.AnimationHexaDome",
				animation: LightSource.prototype.animateTime,
				colorationShader: HexaDomeColorationShader
			},
			"ghost": {
				label: "LIGHT.AnimationGhostLight",
				animation: LightSource.prototype.animateTime,
				illuminationShader: GhostLightIlluminationShader,
				colorationShader: GhostLightColorationShader
			},
			"energy": {
				label: "LIGHT.AnimationEnergyField",
				animation: LightSource.prototype.animateTime,
				colorationShader: EnergyFieldColorationShader
			},
			"roiling": {
				label: "LIGHT.AnimationRoilingMass",
				animation: LightSource.prototype.animateTime,
				illuminationShader: RoilingIlluminationShader
			},
			"hole": {
				label: "LIGHT.AnimationBlackHole",
				animation: LightSource.prototype.animateTime,
				illuminationShader: BlackHoleIlluminationShader
			},
			"vortex": {
				label: "LIGHT.AnimationVortex",
				animation: LightSource.prototype.animateTime,
				illuminationShader: VortexIlluminationShader,
				colorationShader: VortexColorationShader
			},
			"witchwave": {
				label: "LIGHT.AnimationBewitchingWave",
				animation: LightSource.prototype.animateTime,
				illuminationShader: BewitchingWaveIlluminationShader,
				colorationShader: BewitchingWaveColorationShader
			},
			"rainbowswirl": {
				label: "LIGHT.AnimationSwirlingRainbow",
				animation: LightSource.prototype.animateTime,
				colorationShader: SwirlingRainbowColorationShader
			},
			"radialrainbow": {
				label: "LIGHT.AnimationRadialRainbow",
				animation: LightSource.prototype.animateTime,
				colorationShader: RadialRainbowColorationShader
			},
			"fairy": {
				label: "LIGHT.AnimationFairyLight",
				animation: LightSource.prototype.animateTime,
				illuminationShader: FairyLightIlluminationShader,
				colorationShader: FairyLightColorationShader
			}
		}
	},

	/**
	 * Configure the default Token text style so that it may be reused and overridden by modules
	 * @type {PIXI.TextStyle}
	 */
	canvasTextStyle: new PIXI.TextStyle({
		fontFamily: "Signika",
		fontSize: 36,
		fill: "#FFFFFF",
		stroke: '#111111',
		strokeThickness: 1,
		dropShadow: true,
		dropShadowColor: "#000000",
		dropShadowBlur: 4,
		dropShadowAngle: 0,
		dropShadowDistance: 0,
		align: "center",
		wordWrap: false,
		padding: 1
	}),

	/**
	 * Available Weather Effects implementations
	 * @type {Object}
	 */
	weatherEffects: {
		leaves: AutumnLeavesWeatherEffect,
		rain: RainWeatherEffect,
		snow: SnowWeatherEffect
	},


	/**
	 * The control icons used for rendering common HUD operations
	 * @type {Object}
	 */
	controlIcons: {
		combat: "icons/svg/combat.svg",
		visibility: "icons/svg/cowled.svg",
		effects: "icons/svg/aura.svg",
		lock: "icons/svg/padlock.svg",
		up: "icons/svg/up.svg",
		down: "icons/svg/down.svg",
		defeated: "icons/svg/skull.svg",
		light: "icons/svg/light.svg",
		lightOff: "icons/svg/light-off.svg",
		template: "icons/svg/explosion.svg",
		sound: "icons/svg/sound.svg",
		soundOff: "icons/svg/sound-off.svg",
		doorClosed: "icons/svg/door-closed-outline.svg",
		doorOpen: "icons/svg/door-open-outline.svg",
		doorSecret: "icons/svg/door-secret-outline.svg",
		doorLocked: "icons/svg/door-locked-outline.svg"
	},

	/**
	 * Suggested font families that are displayed wherever a choice is presented
	 * @type {string[]}
	 */
	fontFamilies: [
		"Arial",
		"Courier",
		"Courier New",
		"Helvetica",
		"Signika",
		"Times",
		"Times New Roman",
		"Modesto Condensed"
	],

	/**
	 * The default font family used for text labels on the PIXI Canvas
	 * @type {string}
	 */
	defaultFontFamily: "Signika",

	/**
	 * An array of status effects which can be applied to a TokenDocument.
	 * Each effect can either be a string for an icon path, or an object representing an Active Effect data.
	 * @type {Array<string|foundry.data.ActiveEffectData>}
	 */
	statusEffects: [
		{
			id: "dead",
			label: "EFFECT.StatusDead",
			icon: "icons/svg/skull.svg"
		},
		{
			id: "unconscious",
			label: "EFFECT.StatusUnconscious",
			icon: "icons/svg/unconscious.svg"
		},
		{
			id: "sleep",
			label: "EFFECT.StatusAsleep",
			icon: "icons/svg/sleep.svg"
		},
		{
			id: "stun",
			label: "EFFECT.StatusStunned",
			icon: "icons/svg/daze.svg"
		},
		{
			id: "prone",
			label: "EFFECT.StatusProne",
			icon: "icons/svg/falling.svg"
		},
		{
			id: "restrain",
			label: "EFFECT.StatusRestrained",
			icon: "icons/svg/net.svg",
		},
		{
			id: "paralysis",
			label: "EFFECT.StatusParalysis",
			icon: "icons/svg/paralysis.svg",
		},
		{
			id: "fly",
			label: "EFFECT.StatusFlying",
			icon: "icons/svg/wing.svg",
		},
		{
			id: "blind",
			label: "EFFECT.StatusBlind",
			icon: "icons/svg/blind.svg"
		},
		{
			id: "deaf",
			label: "EFFECT.StatusDeaf",
			icon: "icons/svg/deaf.svg"
		},
		{
			id: "silence",
			label: "EFFECT.StatusSilenced",
			icon: "icons/svg/silenced.svg"
		},
		{
			id: "fear",
			label: "EFFECT.StatusFear",
			icon: "icons/svg/terror.svg"
		},
		{
			id: "burning",
			label: "EFFECT.StatusBurning",
			icon: "icons/svg/fire.svg"
		},
		{
			id: "frozen",
			label: "EFFECT.StatusFrozen",
			icon: "icons/svg/frozen.svg"
		},
		{
			id: "shock",
			label: "EFFECT.StatusShocked",
			icon: "icons/svg/lightning.svg"
		},
		{
			id: "corrode",
			label: "EFFECT.StatusCorrode",
			icon: "icons/svg/acid.svg"
		},
		{
			id: "bleeding",
			label: "EFFECT.StatusBleeding",
			icon: "icons/svg/blood.svg"
		},
		{
			id: "disease",
			label: "EFFECT.StatusDisease",
			icon: "icons/svg/biohazard.svg"
		},
		{
			id: "poison",
			label: "EFFECT.StatusPoison",
			icon: "icons/svg/poison.svg"
		},
		{
			id: "radiation",
			label: "EFFECT.StatusRadiation",
			icon: "icons/svg/radiation.svg"
		},
		{
			id: "regen",
			label: "EFFECT.StatusRegen",
			icon: "icons/svg/regen.svg"
		},
		{
			id: "degen",
			label: "EFFECT.StatusDegen",
			icon: "icons/svg/degen.svg"
		},
		{
			id: "upgrade",
			label: "EFFECT.StatusUpgrade",
			icon: "icons/svg/upgrade.svg"
		},
		{
			id: "downgrade",
			label: "EFFECT.StatusDowngrade",
			icon: "icons/svg/downgrade.svg"
		},
		{
			id: "target",
			label: "EFFECT.StatusTarget",
			icon: "icons/svg/target.svg"
		},
		{
			id: "eye",
			label: "EFFECT.StatusMarked",
			icon: "icons/svg/eye.svg"
		},
		{
			id: "curse",
			label: "EFFECT.StatusCursed",
			icon: "icons/svg/sun.svg"
		},
		{
			id: "bless",
			label: "EFFECT.StatusBlessed",
			icon: "icons/svg/angel.svg"
		},
		{
			id: "fireShield",
			label: "EFFECT.StatusFireShield",
			icon: "icons/svg/fire-shield.svg"
		},
		{
			id: "coldShield",
			label: "EFFECT.StatusIceShield",
			icon: "icons/svg/ice-shield.svg"
		},
		{
			id: "magicShield",
			label: "EFFECT.StatusMagicShield",
			icon: "icons/svg/mage-shield.svg"
		},
		{
			id: "holyShield",
			label: "EFFECT.StatusHolyShield",
			icon: "icons/svg/holy-shield.svg"
		},
	],

	/**
	 * A mapping of core audio effects used which can be replaced by systems or mods
	 * @type {Object}
	 */
	sounds: {
		dice: "sounds/dice.wav",
		lock: "sounds/lock.wav",
		notification: "sounds/notify.wav",
		combat: "sounds/drums.wav"
	},

	/**
	 * Define the set of supported languages for localization
	 * @type {{string, string}}
	 */
	supportedLanguages: {
		en: "English"
	},

	/**
	 * Configuration for time tracking
	 * @type {{turnTime: number}}
	 */
	time: {
		turnTime: 0,
		roundTime: 0
	},

	/* -------------------------------------------- */
	/*  Embedded Documents                          */
	/* -------------------------------------------- */

	/**
	 * Configuration for the ActiveEffect embedded document type
	 */
	ActiveEffect: {
		documentClass: ActiveEffect
	},

	/**
	 * Configuration for the Card embedded Document type
	 */
	Card: {
		documentClass: Card
	},

	/**
	 * Configuration for the TableResult embedded document type
	 */
	TableResult: {
		documentClass: TableResult
	},

	/**
	 * Configuration for the PlaylistSound embedded document type
	 */
	PlaylistSound: {
		documentClass: PlaylistSound
	},

	/**
	 * Configuration for the AmbientLight embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	AmbientLight: {
		documentClass: AmbientLightDocument,
		objectClass: AmbientLight,
		layerClass: LightingLayer
	},

	/**
	 * Configuration for the AmbientSound embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	AmbientSound: {
		documentClass: AmbientSoundDocument,
		objectClass: AmbientSound,
		layerClass: SoundsLayer
	},

	/**
	 * Configuration for the Combatant embedded document type within a Combat document
	 * @enum {Function}
	 */
	Combatant: {
		documentClass: Combatant
	},

	/**
	 * Configuration for the Drawing embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	Drawing: {
		documentClass: DrawingDocument,
		objectClass: Drawing,
		layerClass: DrawingsLayer
	},

	/**
	 * Configuration for the MeasuredTemplate embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	MeasuredTemplate: {
		defaults: {
			angle: 53.13,
			width: 1
		},
		types: {
			"circle": "Circle",
			"cone": "Cone",
			"rect": "Rectangle",
			"ray": "Ray"
		},
		documentClass: MeasuredTemplateDocument,
		objectClass: MeasuredTemplate,
		layerClass: TemplateLayer
	},

	/**
	 * Configuration for the Note embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	Note: {
		documentClass: NoteDocument,
		objectClass: Note,
		layerClass: NotesLayer
	},

	/**
	 * Configuration for the Tile embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	Tile: {
		documentClass: TileDocument,
		objectClass: Tile,
		layerClass: BackgroundLayer
	},

	/**
	 * Configuration for the Token embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	Token: {
		documentClass: TokenDocument,
		objectClass: Token,
		layerClass: TokenLayer,
		prototypeSheetClass: TokenConfig
	},

	/**
	 * Configuration for the Wall embedded document type and its representation on the game Canvas
	 * @enum {Function}
	 */
	Wall: {
		documentClass: WallDocument,
		objectClass: Wall,
		layerClass: WallsLayer
	},

	/* -------------------------------------------- */
	/*  Integrations                                */
	/* -------------------------------------------- */

	/**
	 * Default configuration options for TinyMCE editors
	 * @type {object}
	 */
	TinyMCE: {
		branding: false,
		menubar: false,
		statusbar: false,
		content_css: ["/css/mce.css"],
		plugins: "lists image table hr code save link",
		toolbar: "styleselect bullist numlist image table hr link removeformat code save",
		save_enablewhendirty: true,
		table_default_styles: {},
		style_formats: [
			{
				title: "Custom",
				items: [
					{
						title: "Secret",
						block: 'section',
						classes: 'secret',
						wrapper: true
					}
				]
			}
		],
		style_formats_merge: true,
	},

	/**
	 * Configuration for the WebRTC implementation class
	 * @type {Object}
	 */
	WebRTC: {
		clientClass: SimplePeerAVClient,
		detectPeerVolumeInterval: 50,
		detectSelfVolumeInterval: 20,
		emitVolumeInterval: 25,
		speakingThresholdEvents: 2,
		speakingHistoryLength: 10,
		connectedUserPollIntervalS: 8
	},

	/* -------------------------------------------- */
	/*  Interface                                   */
	/* -------------------------------------------- */

	/**
	 * Configure the Application classes used to render various core UI elements in the application.
	 * The order of this object is relevant, as certain classes need to be constructed and referenced before others.
	 * @type {Object<Application>}
	 */
	ui: {
		menu: MainMenu,
		sidebar: Sidebar,
		pause: Pause,
		nav: SceneNavigation,
		notifications: Notifications,
		actors: ActorDirectory,
		cards: CardsDirectory,
		chat: ChatLog,
		combat: CombatTracker,
		compendium: CompendiumDirectory,
		controls: SceneControls,
		hotbar: Hotbar,
		items: ItemDirectory,
		journal: JournalDirectory,
		macros: MacroDirectory,
		players: PlayerList,
		playlists: PlaylistDirectory,
		scenes: SceneDirectory,
		settings: Settings,
		tables: RollTableDirectory,
		webrtc: CameraViews
	}
};