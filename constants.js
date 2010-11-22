/**
 * Copyright 2007 BitTorrent, Inc. All rights reserved.
 * Copyright 2008 Carsten Niebuhr
 */

var CONST = {
	VERSION: "0.380"
	, BUILD: ""

	//----------------------------------------
	// SETTING DATA CONSTANTS
	//----------------------------------------
	, "SETTING_NAME": 0
	, "SETTING_TYPE": 1
	, "SETTING_VALUE": 2
	, "SETTING_PARAMS": 3

	//----------------------------------------
	// SETTING TYPE CONSTANTS
	//----------------------------------------
	, "SETTINGTYPE_INTEGER": 0
	, "SETTINGTYPE_BOOLEAN": 1
	, "SETTINGTYPE_STRING": 2

	//----------------------------------------
	// SETTING PARAM CONSTANTS
	//----------------------------------------
	, "SETTINGPARAM_ACCESS_RO": "R"
	, "SETTINGPARAM_ACCESS_RW": "Y"
	, "SETTINGPARAM_ACCESS_WO": "W"

	//----------------------------------------
	// TORRENT DATA CONSTANTS
	//----------------------------------------

	, "TORRENT_HASH": 0
	, "TORRENT_STATUS": 1
	, "TORRENT_NAME": 2
	, "TORRENT_SIZE": 3
	, "TORRENT_PROGRESS": 4
	, "TORRENT_DOWNLOADED": 5
	, "TORRENT_UPLOADED": 6
	, "TORRENT_RATIO": 7
	, "TORRENT_UPSPEED": 8
	, "TORRENT_DOWNSPEED": 9
	, "TORRENT_ETA": 10
	, "TORRENT_LABEL": 11
	, "TORRENT_PEERS_CONNECTED": 12
	, "TORRENT_PEERS_SWARM": 13
	, "TORRENT_SEEDS_CONNECTED": 14
	, "TORRENT_SEEDS_SWARM": 15
	, "TORRENT_AVAILABILITY": 16
	, "TORRENT_QUEUE_POSITION": 17
	, "TORRENT_REMAINING": 18
	, "TORRENT_DOWNLOAD_URL": 19
	, "TORRENT_RSS_FEED_URL": 20
	, "TORRENT_STATUS_MESSAGE": 21
	, "TORRENT_STREAM_ID": 22
	, "TORRENT_STREAMING_PROGRESS": 23

	//----------------------------------------
	// TORRENT STATUS CONSTANTS
	//----------------------------------------

	, "STATE_STARTED": 1
	, "STATE_CHECKING": 2
	, "STATE_ERROR": 16
	, "STATE_PAUSED": 32
	, "STATE_QUEUED": 64

	//----------------------------------------
	// FILE DATA CONSTANTS
	//----------------------------------------

	, "FILE_NAME": 0
	, "FILE_SIZE": 1
	, "FILE_DOWNLOADED": 2
	, "FILE_PRIORITY": 3

	//----------------------------------------
	// FILE PRIORITY CONSTANTS
	//----------------------------------------

	, "FILEPRIORITY_SKIP": 0
	, "FILEPRIORITY_LOW": 1
	, "FILEPRIORITY_NORMAL": 2
	, "FILEPRIORITY_HIGH": 3

	//----------------------------------------
	// PEER DATA CONSTANTS
	//----------------------------------------
	, "PEER_COUNTRY": 0
	, "PEER_IP": 1
	, "PEER_REVDNS": 2
	, "PEER_UTP": 3
	, "PEER_PORT": 4
	, "PEER_CLIENT": 5
	, "PEER_FLAGS": 6
	, "PEER_PROGRESS": 7
	, "PEER_DOWNSPEED": 8
	, "PEER_UPSPEED": 9
	, "PEER_REQS_OUT": 10
	, "PEER_REQS_IN": 11
	, "PEER_WAITED": 12
	, "PEER_UPLOADED": 13
	, "PEER_DOWNLOADED": 14
	, "PEER_HASHERR": 15
	, "PEER_PEERDL": 16
	, "PEER_MAXUP": 17
	, "PEER_MAXDOWN": 18
	, "PEER_QUEUED": 19
	, "PEER_INACTIVE": 20
	, "PEER_RELEVANCE": 21

	//----------------------------------------
	// TORRENT DOUBLE-CLICK ACTION CONSTANTS
	//----------------------------------------

	, "TOR_DBLCLK_SHOW_PROPS": 0
	, "TOR_DBLCLK_START_STOP": 1
	, "TOR_DBLCLK_OPEN_FOLDER": 2
	, "TOR_DBLCLK_SHOW_DL_BAR": 3

	//----------------------------------------
	// TORRENT REMOVAL ACTION CONSTANTS
	//----------------------------------------

	, "TOR_REMOVE": 0
	, "TOR_REMOVE_TORRENT": 1
	, "TOR_REMOVE_DATA": 2
	, "TOR_REMOVE_DATATORRENT": 3

	//----------------------------------------
	// BT.TRANSP_DISPOSITION CONSTANTS
	//----------------------------------------

	, "TRANSDISP_UTP": (2 | 8)
	, "TRANSDISP_OUT_TCP": 1
	, "TRANSDISP_OUT_UTP": 2
	, "TRANSDISP_IN_TCP": 4
	, "TRANSDISP_IN_UTP": 8
	, "TRANSDISP_UTP_NEW_HEADER": 16

	//----------------------------------------
	// LANGUAGE STRING CONSTANTS
	//----------------------------------------

	, "CT_MASK1": 0
	, "DLG_BTN_OK": 1
	, "DLG_BTN_CANCEL": 2
	, "DLG_BTN_APPLY": 3
	, "DLG_SETTINGS_00": 4
	, "DLG_SETTINGS_1_GENERAL_01": 5
	, "DLG_SETTINGS_1_GENERAL_02": 6
	, "DLG_SETTINGS_1_GENERAL_10": 7
	, "DLG_SETTINGS_1_GENERAL_11": 8
	, "DLG_SETTINGS_1_GENERAL_12": 9
	, "DLG_SETTINGS_1_GENERAL_13": 10
	, "DLG_SETTINGS_1_GENERAL_17": 11
	, "DLG_SETTINGS_1_GENERAL_18": 12
	, "DLG_SETTINGS_1_GENERAL_19": 13
	, "DLG_SETTINGS_1_GENERAL_20": 14
	, "DLG_SETTINGS_2_UI_01": 15
	, "DLG_SETTINGS_2_UI_02": 16
	, "DLG_SETTINGS_2_UI_03": 17
	, "DLG_SETTINGS_2_UI_04": 18
	, "DLG_SETTINGS_2_UI_05": 19
	, "DLG_SETTINGS_2_UI_06": 20
	, "DLG_SETTINGS_2_UI_07": 21
	, "DLG_SETTINGS_2_UI_15": 22
	, "DLG_SETTINGS_2_UI_16": 23
	, "DLG_SETTINGS_2_UI_17": 24
	, "DLG_SETTINGS_2_UI_18": 25
	, "DLG_SETTINGS_2_UI_19": 26
	, "DLG_SETTINGS_2_UI_20": 27
	, "DLG_SETTINGS_2_UI_22": 28
	, "DLG_SETTINGS_3_PATHS_01": 29
	, "DLG_SETTINGS_3_PATHS_02": 30
	, "DLG_SETTINGS_3_PATHS_03": 31
	, "DLG_SETTINGS_3_PATHS_06": 32
	, "DLG_SETTINGS_3_PATHS_07": 33
	, "DLG_SETTINGS_3_PATHS_10": 34
	, "DLG_SETTINGS_3_PATHS_11": 35
	, "DLG_SETTINGS_3_PATHS_12": 36
	, "DLG_SETTINGS_3_PATHS_15": 37
	, "DLG_SETTINGS_3_PATHS_18": 38
	, "DLG_SETTINGS_3_PATHS_19": 39
	, "DLG_SETTINGS_4_CONN_01": 40
	, "DLG_SETTINGS_4_CONN_02": 41
	, "DLG_SETTINGS_4_CONN_04": 42
	, "DLG_SETTINGS_4_CONN_05": 43
	, "DLG_SETTINGS_4_CONN_06": 44
	, "DLG_SETTINGS_4_CONN_07": 45
	, "DLG_SETTINGS_4_CONN_08": 46
	, "DLG_SETTINGS_4_CONN_09": 47
	, "DLG_SETTINGS_4_CONN_11": 48
	, "DLG_SETTINGS_4_CONN_13": 49
	, "DLG_SETTINGS_4_CONN_15": 50
	, "DLG_SETTINGS_4_CONN_16": 51
	, "DLG_SETTINGS_4_CONN_18": 52
	, "DLG_SETTINGS_4_CONN_19": 53
	, "DLG_SETTINGS_4_CONN_20": 54
	, "DLG_SETTINGS_4_CONN_21": 55
	, "DLG_SETTINGS_4_CONN_22": 56
	, "DLG_SETTINGS_4_CONN_23": 57
	, "DLG_SETTINGS_4_CONN_24": 58
	, "DLG_SETTINGS_4_CONN_25": 59
	, "DLG_SETTINGS_5_BANDWIDTH_01": 60
	, "DLG_SETTINGS_5_BANDWIDTH_02": 61
	, "DLG_SETTINGS_5_BANDWIDTH_03": 62
	, "DLG_SETTINGS_5_BANDWIDTH_05": 63
	, "DLG_SETTINGS_5_BANDWIDTH_07": 64
	, "DLG_SETTINGS_5_BANDWIDTH_08": 65
	, "DLG_SETTINGS_5_BANDWIDTH_10": 66
	, "DLG_SETTINGS_5_BANDWIDTH_11": 67
	, "DLG_SETTINGS_5_BANDWIDTH_14": 68
	, "DLG_SETTINGS_5_BANDWIDTH_15": 69
	, "DLG_SETTINGS_5_BANDWIDTH_17": 70
	, "DLG_SETTINGS_5_BANDWIDTH_18": 71
	, "DLG_SETTINGS_5_BANDWIDTH_19": 72
	, "DLG_SETTINGS_5_BANDWIDTH_20": 73
	, "DLG_SETTINGS_6_BITTORRENT_01": 74
	, "DLG_SETTINGS_6_BITTORRENT_02": 75
	, "DLG_SETTINGS_6_BITTORRENT_03": 76
	, "DLG_SETTINGS_6_BITTORRENT_04": 77
	, "DLG_SETTINGS_6_BITTORRENT_05": 78
	, "DLG_SETTINGS_6_BITTORRENT_06": 79
	, "DLG_SETTINGS_6_BITTORRENT_07": 80
	, "DLG_SETTINGS_6_BITTORRENT_08": 81
	, "DLG_SETTINGS_6_BITTORRENT_10": 82
	, "DLG_SETTINGS_6_BITTORRENT_11": 83
	, "DLG_SETTINGS_6_BITTORRENT_13": 84
	, "DLG_SETTINGS_6_BITTORRENT_14": 85
	, "DLG_SETTINGS_6_BITTORRENT_15": 86
	, "DLG_SETTINGS_7_TRANSFERCAP_01": 87
	, "DLG_SETTINGS_7_TRANSFERCAP_02": 88
	, "DLG_SETTINGS_7_TRANSFERCAP_03": 89
	, "DLG_SETTINGS_7_TRANSFERCAP_04": 90
	, "DLG_SETTINGS_7_TRANSFERCAP_05": 91
	, "DLG_SETTINGS_7_TRANSFERCAP_06": 92
	, "DLG_SETTINGS_7_TRANSFERCAP_07": 93
	, "DLG_SETTINGS_7_TRANSFERCAP_08": 94
	, "DLG_SETTINGS_7_TRANSFERCAP_09": 95
	, "DLG_SETTINGS_7_TRANSFERCAP_10": 96
	, "DLG_SETTINGS_7_TRANSFERCAP_11": 97
	, "DLG_SETTINGS_7_TRANSFERCAP_12": 98
	, "DLG_SETTINGS_8_QUEUEING_01": 99
	, "DLG_SETTINGS_8_QUEUEING_02": 100
	, "DLG_SETTINGS_8_QUEUEING_04": 101
	, "DLG_SETTINGS_8_QUEUEING_06": 102
	, "DLG_SETTINGS_8_QUEUEING_07": 103
	, "DLG_SETTINGS_8_QUEUEING_09": 104
	, "DLG_SETTINGS_8_QUEUEING_11": 105
	, "DLG_SETTINGS_8_QUEUEING_12": 106
	, "DLG_SETTINGS_8_QUEUEING_13": 107
	, "DLG_SETTINGS_9_SCHEDULER_01": 108
	, "DLG_SETTINGS_9_SCHEDULER_02": 109
	, "DLG_SETTINGS_9_SCHEDULER_04": 110
	, "DLG_SETTINGS_9_SCHEDULER_05": 111
	, "DLG_SETTINGS_9_SCHEDULER_07": 112
	, "DLG_SETTINGS_9_SCHEDULER_09": 113
	, "DLG_SETTINGS_9_WEBUI_01": 114
	, "DLG_SETTINGS_9_WEBUI_02": 115
	, "DLG_SETTINGS_9_WEBUI_03": 116
	, "DLG_SETTINGS_9_WEBUI_05": 117
	, "DLG_SETTINGS_9_WEBUI_07": 118
	, "DLG_SETTINGS_9_WEBUI_09": 119
	, "DLG_SETTINGS_9_WEBUI_10": 120
	, "DLG_SETTINGS_9_WEBUI_12": 121
	, "DLG_SETTINGS_A_ADVANCED_01": 122
	, "DLG_SETTINGS_A_ADVANCED_02": 123
	, "DLG_SETTINGS_A_ADVANCED_03": 124
	, "DLG_SETTINGS_A_ADVANCED_04": 125
	, "DLG_SETTINGS_A_ADVANCED_05": 126
	, "DLG_SETTINGS_B_ADV_UI_01": 127
	, "DLG_SETTINGS_B_ADV_UI_02": 128
	, "DLG_SETTINGS_B_ADV_UI_03": 129
	, "DLG_SETTINGS_B_ADV_UI_05": 130
	, "DLG_SETTINGS_B_ADV_UI_07": 131
	, "DLG_SETTINGS_B_ADV_UI_08": 132
	, "DLG_SETTINGS_C_ADV_CACHE_01": 133
	, "DLG_SETTINGS_C_ADV_CACHE_02": 134
	, "DLG_SETTINGS_C_ADV_CACHE_03": 135
	, "DLG_SETTINGS_C_ADV_CACHE_05": 136
	, "DLG_SETTINGS_C_ADV_CACHE_06": 137
	, "DLG_SETTINGS_C_ADV_CACHE_07": 138
	, "DLG_SETTINGS_C_ADV_CACHE_08": 139
	, "DLG_SETTINGS_C_ADV_CACHE_09": 140
	, "DLG_SETTINGS_C_ADV_CACHE_10": 141
	, "DLG_SETTINGS_C_ADV_CACHE_11": 142
	, "DLG_SETTINGS_C_ADV_CACHE_12": 143
	, "DLG_SETTINGS_C_ADV_CACHE_13": 144
	, "DLG_SETTINGS_C_ADV_CACHE_14": 145
	, "DLG_SETTINGS_C_ADV_CACHE_15": 146
	, "DLG_SETTINGS_C_ADV_RUN_01": 147
	, "DLG_SETTINGS_C_ADV_RUN_02": 148
	, "DLG_SETTINGS_C_ADV_RUN_04": 149
	, "DLG_SETTINGS_C_ADV_RUN_06": 150
	, "DLG_TORRENTPROP_00": 151
	, "DLG_TORRENTPROP_1_GEN_01": 152
	, "DLG_TORRENTPROP_1_GEN_03": 153
	, "DLG_TORRENTPROP_1_GEN_04": 154
	, "DLG_TORRENTPROP_1_GEN_06": 155
	, "DLG_TORRENTPROP_1_GEN_08": 156
	, "DLG_TORRENTPROP_1_GEN_10": 157
	, "DLG_TORRENTPROP_1_GEN_11": 158
	, "DLG_TORRENTPROP_1_GEN_12": 159
	, "DLG_TORRENTPROP_1_GEN_14": 160
	, "DLG_TORRENTPROP_1_GEN_16": 161
	, "DLG_TORRENTPROP_1_GEN_17": 162
	, "DLG_TORRENTPROP_1_GEN_18": 163
	, "DLG_TORRENTPROP_1_GEN_19": 164
	, "PRS_COL_IP": 165
	, "PRS_COL_PORT": 166
	, "PRS_COL_CLIENT": 167
	, "PRS_COL_FLAGS": 168
	, "PRS_COL_PCNT": 169
	, "PRS_COL_RELEVANCE": 170
	, "PRS_COL_DOWNSPEED": 171
	, "PRS_COL_UPSPEED": 172
	, "PRS_COL_REQS": 173
	, "PRS_COL_WAITED": 174
	, "PRS_COL_UPLOADED": 175
	, "PRS_COL_DOWNLOADED": 176
	, "PRS_COL_HASHERR": 177
	, "PRS_COL_PEERDL": 178
	, "PRS_COL_MAXUP": 179
	, "PRS_COL_MAXDOWN": 180
	, "PRS_COL_QUEUED": 181
	, "PRS_COL_INACTIVE": 182
	, "FI_COL_DONE": 183
	, "FI_COL_NAME": 184
	, "FI_COL_PCNT": 185
	, "FI_COL_PRIO": 186
	, "FI_COL_SIZE": 187
	, "FI_PRI0": 188
	, "FI_PRI1": 189
	, "FI_PRI2": 190
	, "FI_PRI3": 191
	, "GN_TP_01": 192
	, "GN_TP_02": 193
	, "GN_TP_03": 194
	, "GN_TP_04": 195
	, "GN_TP_05": 196
	, "GN_TP_06": 197
	, "GN_TP_07": 198
	, "GN_TP_08": 199
	, "GN_TP_09": 200
	, "GN_TRANSFER": 201
	, "GN_XCONN": 202
	, "MAIN_TITLEBAR_SPEED": 203
	, "MENU_SHOW_CATEGORY": 204
	, "MENU_SHOW_DETAIL": 205
	, "MENU_RESET": 206
	, "MP_RESOLVE_IPS": 207
	, "MF_GETFILE": 208
	, "MF_DONT": 209
	, "MF_HIGH": 210
	, "MF_LOW": 211
	, "MF_NORMAL": 212
	, "ML_DELETE_DATA": 213
	, "ML_DELETE_TORRENT": 214
	, "ML_DELETE_DATATORRENT": 215
	, "ML_FORCE_RECHECK": 216
	, "ML_FORCE_START": 217
	, "ML_LABEL": 218
	, "ML_PAUSE": 219
	, "ML_PROPERTIES": 220
	, "ML_QUEUEDOWN": 221
	, "ML_QUEUEUP": 222
	, "ML_REMOVE": 223
	, "ML_REMOVE_AND": 224
	, "ML_START": 225
	, "ML_STOP": 226
	, "OV_CAT_ACTIVE": 227
	, "OV_CAT_ALL": 228
	, "OV_CAT_COMPL": 229
	, "OV_CAT_DL": 230
	, "OV_CAT_INACTIVE": 231
	, "OV_CAT_NOLABEL": 232
	, "OV_COL_AVAIL": 233
	, "OV_COL_DONE": 234
	, "OV_COL_DOWNLOADED": 235
	, "OV_COL_DOWNSPD": 236
	, "OV_COL_ETA": 237
	, "OV_COL_LABEL": 238
	, "OV_COL_NAME": 239
	, "OV_COL_ORDER": 240
	, "OV_COL_PEERS": 241
	, "OV_COL_REMAINING": 242
	, "OV_COL_SEEDS": 243
	, "OV_COL_SEEDS_PEERS": 244
	, "OV_COL_SHARED": 245
	, "OV_COL_SIZE": 246
	, "OV_COL_STATUS": 247
	, "OV_COL_UPPED": 248
	, "OV_COL_UPSPD": 249
	, "OV_CONFIRM_DELETEDATA_MULTIPLE": 250
	, "OV_CONFIRM_DELETEDATA_ONE": 251
	, "OV_CONFIRM_DELETE_MULTIPLE": 252
	, "OV_CONFIRM_DELETE_ONE": 253
	, "OV_FL_CHECKED": 254
	, "OV_FL_DOWNLOADING": 255
	, "OV_FL_ERROR": 256
	, "OV_FL_FINISHED": 257
	, "OV_FL_PAUSED": 258
	, "OV_FL_QUEUED": 259
	, "OV_FL_QUEUED_SEED": 260
	, "OV_FL_SEEDING": 261
	, "OV_FL_STOPPED": 262
	, "OV_NEWLABEL_CAPTION": 263
	, "OV_NEWLABEL_TEXT": 264
	, "OV_NEW_LABEL": 265
	, "OV_REMOVE_LABEL": 266
	, "OV_TABS": 267
	, "OV_TB_ADDTORR": 268
	, "OV_TB_ADDURL": 269
	, "OV_TB_PAUSE": 270
	, "OV_TB_PREF": 271
	, "OV_TB_QUEUEDOWN": 272
	, "OV_TB_QUEUEUP": 273
	, "OV_TB_REMOVE": 274
	, "OV_TB_START": 275
	, "OV_TB_STOP": 276
	, "SIZE_B": 277
	, "SIZE_EB": 278
	, "SIZE_GB": 279
	, "SIZE_KB": 280
	, "SIZE_MB": 281
	, "SIZE_PB": 282
	, "SIZE_TB": 283
	, "ST_CAPT_ADVANCED": 284
	, "ST_CAPT_BANDWIDTH": 285
	, "ST_CAPT_CONNECTION": 286
	, "ST_CAPT_DISK_CACHE": 287
	, "ST_CAPT_FOLDER": 288
	, "ST_CAPT_GENERAL": 289
	, "ST_CAPT_SCHEDULER": 290
	, "ST_CAPT_QUEUEING": 291
	, "ST_CAPT_UI_EXTRAS": 292
	, "ST_CAPT_UI_SETTINGS": 293
	, "ST_CAPT_BITTORRENT": 294
	, "ST_CAPT_WEBUI": 295
	, "ST_CAPT_TRANSFER_CAP": 296
	, "ST_CAPT_RUN_PROGRAM": 297
	, "ST_CBO_UI_DBLCLK_TOR": 298
	, "ST_CBO_ENCRYPTIONS": 299
	, "ST_CBO_PROXY": 300
	, "ST_CBO_TCAP_MODES": 301
	, "ST_CBO_TCAP_UNITS": 302
	, "ST_CBO_TCAP_PERIODS": 303
	, "ST_COL_NAME": 304
	, "ST_COL_VALUE": 305
	, "ST_SCH_DAYCODES": 306
	, "ST_SCH_DAYNAMES": 307
	, "ST_SCH_LGND_FULL": 308
	, "ST_SCH_LGND_FULLEX": 309
	, "ST_SCH_LGND_LIMITED": 310
	, "ST_SCH_LGND_LIMITEDEX": 311
	, "ST_SCH_LGND_SEEDING": 312
	, "ST_SCH_LGND_SEEDINGEX": 313
	, "ST_SCH_LGND_OFF": 314
	, "ST_SCH_LGND_OFFEX": 315
	, "ST_SEEDTIMES_HOURS": 316
	, "ST_SEEDTIMES_IGNORE": 317
	, "ST_SEEDTIMES_MINUTES": 318
	, "TIME_DAYS_HOURS": 319
	, "TIME_HOURS_MINS": 320
	, "TIME_MINS_SECS": 321
	, "TIME_SECS": 322
	, "TIME_WEEKS_DAYS": 323
	, "TIME_YEARS_WEEKS": 324

};
