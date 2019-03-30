/* tslint:disable */
export default JSON.parse(`{
	"id": 0,
	"name": "@baklavajs/core",
	"kind": 0,
	"flags": {},
	"children": [
		{
			"id": 371,
			"name": "TemporaryConnectionState",
			"kind": 4,
			"kindString": "Enumeration",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 373,
					"name": "ALLOWED",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 7,
							"character": 11
						}
					]
				},
				{
					"id": 374,
					"name": "FORBIDDEN",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 8,
							"character": 13
						}
					]
				},
				{
					"id": 372,
					"name": "NONE",
					"kind": 16,
					"kindString": "Enumeration member",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 6,
							"character": 8
						}
					]
				}
			],
			"groups": [
				{
					"title": "Enumeration members",
					"kind": 16,
					"children": [
						373,
						374,
						372
					]
				}
			],
			"sources": [
				{
					"fileName": "connection.ts",
					"line": 5,
					"character": 36
				}
			]
		},
		{
			"id": 25,
			"name": "BaklavaEvent",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "Main event class for Baklava"
			},
			"typeParameter": [
				{
					"id": 26,
					"name": "T",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				}
			],
			"children": [
				{
					"id": 27,
					"name": "listeners",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 8,
							"character": 23
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "reference",
								"name": "TokenType",
								"id": 80
							},
							{
								"type": "reference",
								"name": "Listener",
								"id": 81,
								"typeArguments": [
									{
										"type": "typeParameter",
										"name": "T"
									}
								]
							}
						]
					},
					"defaultValue": " new Map()"
				},
				{
					"id": 28,
					"name": "addListener",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 29,
							"name": "addListener",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Subscribe to the event"
							},
							"parameters": [
								{
									"id": 30,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "A token that can be used to unsubscribe from the event later on"
									},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								},
								{
									"id": 31,
									"name": "listener",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "A callback that will be invoked when the event occurs\n"
									},
									"type": {
										"type": "reference",
										"name": "Listener",
										"id": 81,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										]
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 15,
							"character": 22
						}
					]
				},
				{
					"id": 35,
					"name": "emit",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 36,
							"name": "emit",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Invoke all listeners"
							},
							"parameters": [
								{
									"id": 37,
									"name": "data",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "The data to invoke the listeners with.\n"
									},
									"type": {
										"type": "typeParameter",
										"name": "T"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 34,
							"character": 8
						}
					]
				},
				{
					"id": 32,
					"name": "removeListener",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 33,
							"name": "removeListener",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Remove a listener"
							},
							"parameters": [
								{
									"id": 34,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "The token that was specified when subscribing to the listener.\nAn invalid token does not result in an error.\n"
									},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 24,
							"character": 25
						}
					]
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						27
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						28,
						35,
						32
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 6,
					"character": 25
				}
			],
			"extendedBy": [
				{
					"type": "reference",
					"name": "PreventableBaklavaEvent",
					"id": 38
				}
			]
		},
		{
			"id": 385,
			"name": "Connection",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 393,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 394,
							"name": "new Connection",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {},
							"parameters": [
								{
									"id": 395,
									"name": "from",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								},
								{
									"id": 396,
									"name": "to",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "Connection",
								"id": 385
							}
						}
					],
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 35,
							"character": 6
						}
					]
				},
				{
					"id": 390,
					"name": "destructed",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 31,
							"character": 21
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "boolean"
					},
					"defaultValue": "false"
				},
				{
					"id": 387,
					"name": "from",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 28,
							"character": 15
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				},
				{
					"id": 386,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 27,
							"character": 13
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 389,
					"name": "isInDanger",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 30,
							"character": 21
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "boolean"
					},
					"defaultValue": "false"
				},
				{
					"id": 388,
					"name": "to",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 29,
							"character": 13
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				},
				{
					"id": 397,
					"name": "destruct",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 398,
							"name": "destruct",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 52,
							"character": 19
						}
					]
				},
				{
					"id": 391,
					"name": "events",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 392,
							"name": "destruct",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "connection.ts",
									"line": 34,
									"character": 16
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "void"
									}
								]
							},
							"defaultValue": " new BaklavaEvent<void>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								392
							]
						}
					],
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 33,
							"character": 17
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						393
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						390,
						387,
						386,
						389,
						388
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						397
					]
				},
				{
					"title": "Object literals",
					"kind": 2097152,
					"children": [
						391
					]
				}
			],
			"sources": [
				{
					"fileName": "connection.ts",
					"line": 25,
					"character": 23
				}
			]
		},
		{
			"id": 399,
			"name": "DummyConnection",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "This class is used for calculation purposes only.\nIt won't alter any state of the connected nodes"
			},
			"children": [
				{
					"id": 403,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 404,
							"name": "new DummyConnection",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {},
							"parameters": [
								{
									"id": 405,
									"name": "from",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								},
								{
									"id": 406,
									"name": "to",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "DummyConnection",
								"id": 399
							}
						}
					],
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 69,
							"character": 29
						}
					]
				},
				{
					"id": 401,
					"name": "from",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 68,
							"character": 15
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					},
					"implementationOf": {
						"type": "reference",
						"name": "IConnection.from",
						"id": 383
					}
				},
				{
					"id": 400,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 67,
							"character": 13
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					},
					"implementationOf": {
						"type": "reference",
						"name": "IConnection.id",
						"id": 382
					}
				},
				{
					"id": 402,
					"name": "to",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 69,
							"character": 13
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					},
					"implementationOf": {
						"type": "reference",
						"name": "IConnection.to",
						"id": 384
					}
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						403
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						401,
						400,
						402
					]
				}
			],
			"sources": [
				{
					"fileName": "connection.ts",
					"line": 65,
					"character": 28
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"name": "IConnection",
					"id": 381
				}
			]
		},
		{
			"id": 194,
			"name": "Editor",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "The main model class for BaklavaJS"
			},
			"children": [
				{
					"id": 197,
					"name": "_connections",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 15,
							"character": 24
						}
					],
					"type": {
						"type": "array",
						"elementType": {
							"type": "reference",
							"name": "Connection",
							"id": 385
						}
					},
					"defaultValue": " []"
				},
				{
					"id": 199,
					"name": "_nodeCategories",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 17,
							"character": 27
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "array",
								"elementType": {
									"type": "intrinsic",
									"name": "string"
								}
							}
						]
					},
					"defaultValue": " new Map([[\"default\", []]])"
				},
				{
					"id": 198,
					"name": "_nodeTypes",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 16,
							"character": 22
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "reference",
								"name": "NodeConstructor",
								"id": 261
							}
						]
					},
					"defaultValue": " new Map()"
				},
				{
					"id": 196,
					"name": "_nodes",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 14,
							"character": 18
						}
					],
					"type": {
						"type": "array",
						"elementType": {
							"type": "reference",
							"name": "Node",
							"id": 267
						}
					},
					"defaultValue": " []"
				},
				{
					"id": 195,
					"name": "_plugins",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 13,
							"character": 20
						}
					],
					"type": {
						"type": "reference",
						"name": "Set",
						"typeArguments": [
							{
								"type": "reference",
								"name": "IPlugin",
								"id": 165
							}
						]
					},
					"defaultValue": " new Set()"
				},
				{
					"id": 219,
					"name": "connections",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "List of all connections"
					},
					"getSignature": [
						{
							"id": 220,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "List of all connections"
							},
							"type": {
								"type": "reference",
								"name": "ReadonlyArray",
								"typeArguments": [
									{
										"type": "reference",
										"name": "Connection",
										"id": 385
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 46,
							"character": 26
						}
					]
				},
				{
					"id": 224,
					"name": "nodeCategories",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "Mapping of nodes to node categories"
					},
					"getSignature": [
						{
							"id": 225,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "Mapping of nodes to node categories"
							},
							"type": {
								"type": "reference",
								"name": "ReadonlyMap",
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "array",
										"elementType": {
											"type": "intrinsic",
											"name": "string"
										}
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 56,
							"character": 29
						}
					]
				},
				{
					"id": 221,
					"name": "nodeTypes",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "List of all registered node types"
					},
					"getSignature": [
						{
							"id": 222,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "List of all registered node types"
							},
							"type": {
								"type": "reference",
								"name": "ReadonlyMap",
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "reflection",
										"declaration": {
											"id": 223,
											"name": "__type",
											"kind": 65536,
											"kindString": "Type literal",
											"flags": {}
										}
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 51,
							"character": 24
						}
					]
				},
				{
					"id": 217,
					"name": "nodes",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "List of all nodes"
					},
					"getSignature": [
						{
							"id": 218,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "List of all nodes"
							},
							"type": {
								"type": "reference",
								"name": "ReadonlyArray",
								"typeArguments": [
									{
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 41,
							"character": 20
						}
					]
				},
				{
					"id": 226,
					"name": "plugins",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "List of all plugins in this editor"
					},
					"getSignature": [
						{
							"id": 227,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "List of all plugins in this editor"
							},
							"type": {
								"type": "reference",
								"name": "ReadonlySet",
								"typeArguments": [
									{
										"type": "reference",
										"name": "IPlugin",
										"id": 165
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 61,
							"character": 22
						}
					]
				},
				{
					"id": 239,
					"name": "addConnection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 240,
							"name": "addConnection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add a connection to the list of connections.",
								"returns": "The created connection. If no connection could be created, returns \`undefined\`.\n"
							},
							"parameters": [
								{
									"id": 241,
									"name": "from",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Start interface for the connection"
									},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								},
								{
									"id": 242,
									"name": "to",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Target interface for the connection"
									},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"name": "Connection",
										"id": 385
									},
									{
										"type": "intrinsic",
										"name": "undefined"
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 116,
							"character": 24
						}
					]
				},
				{
					"id": 233,
					"name": "addNode",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 234,
							"name": "addNode",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add a node to the list of nodes.",
								"returns": "Instance of the node or undefined if the node was not added\n"
							},
							"parameters": [
								{
									"id": 235,
									"name": "node",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Instance of a node"
									},
									"type": {
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "reference",
										"name": "Node",
										"id": 267
									},
									{
										"type": "intrinsic",
										"name": "undefined"
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 86,
							"character": 18
						}
					]
				},
				{
					"id": 246,
					"name": "checkConnection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 247,
							"name": "checkConnection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Checks, whether a connection between two node interfaces would be valid.",
								"returns": "Whether the connection is allowed or not.\n"
							},
							"parameters": [
								{
									"id": 248,
									"name": "from",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "The starting node interface (must be an output interface)"
									},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								},
								{
									"id": 249,
									"name": "to",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "The target node interface (must be an input interface)"
									},
									"type": {
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "intrinsic",
										"name": "false"
									},
									{
										"type": "reference",
										"name": "DummyConnection",
										"id": 399
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 159,
							"character": 26
						}
					]
				},
				{
					"id": 258,
					"name": "findNodeInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 259,
							"name": "findNodeInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 260,
									"name": "id",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "intrinsic",
										"name": "undefined"
									},
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 266,
							"character": 29
						}
					]
				},
				{
					"id": 250,
					"name": "load",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 251,
							"name": "load",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Load a state"
							},
							"parameters": [
								{
									"id": 252,
									"name": "state",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "State to load\n"
									},
									"type": {
										"type": "reference",
										"name": "IState",
										"id": 4
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 190,
							"character": 15
						}
					]
				},
				{
					"id": 228,
					"name": "registerNodeType",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 229,
							"name": "registerNodeType",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Register a new node type"
							},
							"parameters": [
								{
									"id": 230,
									"name": "typeName",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the node (must be equal to the node's \`type\` field)"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 231,
									"name": "type",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Actual type / constructor of the node"
									},
									"type": {
										"type": "reference",
										"name": "NodeConstructor",
										"id": 261
									}
								},
								{
									"id": 232,
									"name": "category",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Category of the node. Will be used in the view's context menu for adding nodes\n"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									},
									"defaultValue": "\"default\""
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 71,
							"character": 27
						}
					]
				},
				{
					"id": 243,
					"name": "removeConnection",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 244,
							"name": "removeConnection",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Remove a connection from the list of connections."
							},
							"parameters": [
								{
									"id": 245,
									"name": "connection",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Connection instance that should be removed.\n"
									},
									"type": {
										"type": "reference",
										"name": "Connection",
										"id": 385
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 144,
							"character": 27
						}
					]
				},
				{
					"id": 236,
					"name": "removeNode",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 237,
							"name": "removeNode",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Removes a node from the list.\nWill also remove all connections from and to the node."
							},
							"parameters": [
								{
									"id": 238,
									"name": "node",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Reference to a node in the list.\n"
									},
									"type": {
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 99,
							"character": 21
						}
					]
				},
				{
					"id": 253,
					"name": "save",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 254,
							"name": "save",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Save a state",
								"returns": "Current state\n"
							},
							"type": {
								"type": "reference",
								"name": "IState",
								"id": 4
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 241,
							"character": 15
						}
					]
				},
				{
					"id": 255,
					"name": "use",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 256,
							"name": "use",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Register a plugin",
								"returns": "Whether the plugin was successfully registered\n"
							},
							"parameters": [
								{
									"id": 257,
									"name": "plugin",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Plugin to register"
									},
									"type": {
										"type": "reference",
										"name": "IPlugin",
										"id": 165
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "boolean"
							}
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 258,
							"character": 14
						}
					]
				},
				{
					"id": 200,
					"name": "events",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 208,
							"name": "addConnection",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 27,
									"character": 21
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IConnection",
										"id": 381
									}
								]
							},
							"defaultValue": " new BaklavaEvent<IConnection>()"
						},
						{
							"id": 204,
							"name": "addNode",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 23,
									"character": 15
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								]
							},
							"defaultValue": " new BaklavaEvent<Node>()"
						},
						{
							"id": 207,
							"name": "beforeAddConnection",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 26,
									"character": 27
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IAddConnectionEventData",
										"id": 170
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IAddConnectionEventData>()"
						},
						{
							"id": 203,
							"name": "beforeAddNode",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 22,
									"character": 21
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<Node>()"
						},
						{
							"id": 201,
							"name": "beforeRegisterNodeType",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 20,
									"character": 30
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IAddNodeTypeEventData",
										"id": 173
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IAddNodeTypeEventData>()"
						},
						{
							"id": 210,
							"name": "beforeRemoveConnection",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 29,
									"character": 30
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IConnection",
										"id": 381
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IConnection>()"
						},
						{
							"id": 205,
							"name": "beforeRemoveNode",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 24,
									"character": 24
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<Node>()"
						},
						{
							"id": 212,
							"name": "beforeUsePlugin",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 31,
									"character": 23
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IPlugin",
										"id": 165
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IPlugin>()"
						},
						{
							"id": 209,
							"name": "checkConnection",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 28,
									"character": 23
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IAddConnectionEventData",
										"id": 170
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IAddConnectionEventData>()"
						},
						{
							"id": 202,
							"name": "registerNodeType",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 21,
									"character": 24
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IAddNodeTypeEventData",
										"id": 173
									}
								]
							},
							"defaultValue": " new BaklavaEvent<IAddNodeTypeEventData>()"
						},
						{
							"id": 211,
							"name": "removeConnection",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 30,
									"character": 24
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IConnection",
										"id": 381
									}
								]
							},
							"defaultValue": " new BaklavaEvent<IConnection>()"
						},
						{
							"id": 206,
							"name": "removeNode",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 25,
									"character": 18
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								]
							},
							"defaultValue": " new BaklavaEvent<Node>()"
						},
						{
							"id": 213,
							"name": "usePlugin",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 32,
									"character": 17
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IPlugin",
										"id": 165
									}
								]
							},
							"defaultValue": " new BaklavaEvent<IPlugin>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								208,
								204,
								207,
								203,
								201,
								210,
								205,
								212,
								209,
								202,
								211,
								206,
								213
							]
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 19,
							"character": 17
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				},
				{
					"id": 214,
					"name": "hooks",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 216,
							"name": "load",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 37,
									"character": 12
								}
							],
							"type": {
								"type": "reference",
								"name": "SequentialHook",
								"id": 66,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IState",
										"id": 4
									}
								]
							},
							"defaultValue": " new SequentialHook<IState>()"
						},
						{
							"id": 215,
							"name": "save",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "editor.ts",
									"line": 36,
									"character": 12
								}
							],
							"type": {
								"type": "reference",
								"name": "SequentialHook",
								"id": 66,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IState",
										"id": 4
									}
								]
							},
							"defaultValue": " new SequentialHook<IState>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								216,
								215
							]
						}
					],
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 35,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						197,
						199,
						198,
						196,
						195
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						219,
						224,
						221,
						217,
						226
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						239,
						233,
						246,
						258,
						250,
						228,
						243,
						236,
						253,
						255
					]
				},
				{
					"title": "Object literals",
					"kind": 2097152,
					"children": [
						200,
						214
					]
				}
			],
			"sources": [
				{
					"fileName": "editor.ts",
					"line": 11,
					"character": 19
				}
			]
		},
		{
			"id": 51,
			"name": "Hook",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isAbstract": true
			},
			"comment": {
				"shortText": "Base class for hooks in Baklava"
			},
			"typeParameter": [
				{
					"id": 52,
					"name": "I",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				},
				{
					"id": 53,
					"name": "O",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				}
			],
			"children": [
				{
					"id": 54,
					"name": "tapMap",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 64,
							"character": 18
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "reference",
								"name": "TokenType",
								"id": 80
							},
							{
								"type": "reference",
								"name": "HookTap",
								"id": 86,
								"typeArguments": [
									{
										"type": "typeParameter",
										"name": "I"
									},
									{
										"type": "typeParameter",
										"name": "O"
									}
								]
							}
						]
					},
					"defaultValue": " new Map()"
				},
				{
					"id": 55,
					"name": "taps",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 65,
							"character": 18
						}
					],
					"type": {
						"type": "reference",
						"name": "Array",
						"typeArguments": [
							{
								"type": "reference",
								"name": "HookTap",
								"id": 86,
								"typeArguments": [
									{
										"type": "typeParameter",
										"name": "I"
									},
									{
										"type": "typeParameter",
										"name": "O"
									}
								]
							}
						]
					},
					"defaultValue": " []"
				},
				{
					"id": 63,
					"name": "execute",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true,
						"isAbstract": true
					},
					"signatures": [
						{
							"id": 64,
							"name": "execute",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 65,
									"name": "data",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "typeParameter",
										"name": "I"
									}
								}
							],
							"type": {
								"type": "typeParameter",
								"name": "O"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 84,
							"character": 27
						}
					]
				},
				{
					"id": 56,
					"name": "tap",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 57,
							"name": "tap",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 58,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								},
								{
									"id": 59,
									"name": "tapFn",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "HookTap",
										"id": 86,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "I"
											},
											{
												"type": "typeParameter",
												"name": "O"
											}
										]
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 67,
							"character": 14
						}
					]
				},
				{
					"id": 60,
					"name": "untap",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 61,
							"name": "untap",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 62,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 75,
							"character": 16
						}
					]
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						54,
						55
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						63,
						56,
						60
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 62,
					"character": 26
				}
			],
			"extendedBy": [
				{
					"type": "reference",
					"name": "SequentialHook",
					"id": 66
				}
			]
		},
		{
			"id": 267,
			"name": "Node",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true,
				"isAbstract": true
			},
			"comment": {
				"shortText": "Abstract base class for every node"
			},
			"children": [
				{
					"id": 287,
					"name": "editorInstance",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 57,
							"character": 26
						}
					],
					"type": {
						"type": "reference",
						"name": "Editor",
						"id": 194
					}
				},
				{
					"id": 270,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "Unique identifier of the node"
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 25,
							"character": 13
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					},
					"defaultValue": " \"node_\" + generateId()"
				},
				{
					"id": 271,
					"name": "interfaces",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "A map of all interfaces of the node.\n| Key = Name of the interface\n| Value = [[NodeInterface]] instance"
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 30,
							"character": 21
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "reference",
								"name": "NodeInterface",
								"id": 340
							}
						]
					},
					"defaultValue": " new Map()"
				},
				{
					"id": 269,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true,
						"isAbstract": true
					},
					"comment": {
						"shortText": "Name of the node. Should be set equal to [[type]] by default"
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 23,
							"character": 24
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 272,
					"name": "options",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "A map of all options of the node.\n| Key = Name of the option\n| Value = [[NodeOption]] instance"
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 35,
							"character": 18
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "reference",
								"name": "NodeOption",
								"id": 149
							}
						]
					},
					"defaultValue": " new Map()"
				},
				{
					"id": 273,
					"name": "state",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "Use this property to save additional state of the node"
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 38,
							"character": 16
						}
					],
					"type": {
						"type": "reference",
						"name": "Record",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "intrinsic",
								"name": "any"
							}
						]
					}
				},
				{
					"id": 268,
					"name": "type",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true,
						"isAbstract": true
					},
					"comment": {
						"shortText": "Type of the node"
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 21,
							"character": 24
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 288,
					"name": "inputInterfaces",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "All input interfaces of the node"
					},
					"getSignature": [
						{
							"id": 289,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "All input interfaces of the node"
							},
							"type": {
								"type": "reference",
								"name": "Record",
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 60,
							"character": 30
						}
					]
				},
				{
					"id": 290,
					"name": "outputInterfaces",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "All output interfaces of the node"
					},
					"getSignature": [
						{
							"id": 291,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"comment": {
								"shortText": "All output interfaces of the node"
							},
							"type": {
								"type": "reference",
								"name": "Record",
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 69,
							"character": 31
						}
					]
				},
				{
					"id": 299,
					"name": "addInputInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 300,
							"name": "addInputInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add an input interface to the node",
								"returns": "The created interface or undefined, if the interface was not created\n"
							},
							"parameters": [
								{
									"id": 301,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the interface"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 302,
									"name": "option",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Optional name of a NodeOption which is displayed when the interface is not connected"
									},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "intrinsic",
												"name": "undefined"
											},
											{
												"type": "intrinsic",
												"name": "string"
											}
										]
									}
								},
								{
									"id": 303,
									"name": "defaultValue",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Optional default value for the interface/option"
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								},
								{
									"id": 304,
									"name": "additionalProperties",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Additional properties of the interface that can be used by plugins"
									},
									"type": {
										"type": "reference",
										"name": "Record",
										"typeArguments": [
											{
												"type": "intrinsic",
												"name": "string"
											},
											{
												"type": "intrinsic",
												"name": "any"
											}
										]
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "intrinsic",
										"name": "undefined"
									},
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 123,
							"character": 31
						}
					]
				},
				{
					"id": 335,
					"name": "addInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 336,
							"name": "addInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 337,
									"name": "isInput",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								},
								{
									"id": 338,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 339,
									"name": "option",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "intrinsic",
												"name": "undefined"
											},
											{
												"type": "intrinsic",
												"name": "string"
											}
										]
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeInterface",
								"id": 340
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 254,
							"character": 24
						}
					]
				},
				{
					"id": 312,
					"name": "addOption",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 313,
							"name": "addOption",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add a node option to the node",
								"returns": "The created option or undefined, if the option was not created\n"
							},
							"parameters": [
								{
									"id": 314,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the option"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 315,
									"name": "component",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the option component"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 316,
									"name": "defaultValue",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Default value for the option"
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									},
									"defaultValue": " null"
								},
								{
									"id": 317,
									"name": "sidebarComponent",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Optional name of the component to display in the sidebar"
									},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "intrinsic",
												"name": "undefined"
											},
											{
												"type": "intrinsic",
												"name": "string"
											}
										]
									}
								},
								{
									"id": 318,
									"name": "additionalProperties",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Additional properties of the option that can be used by plugins"
									},
									"type": {
										"type": "reference",
										"name": "Record",
										"typeArguments": [
											{
												"type": "intrinsic",
												"name": "string"
											},
											{
												"type": "intrinsic",
												"name": "any"
											}
										]
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "intrinsic",
										"name": "undefined"
									},
									{
										"type": "reference",
										"name": "NodeOption",
										"id": 149
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 187,
							"character": 23
						}
					]
				},
				{
					"id": 305,
					"name": "addOutputInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 306,
							"name": "addOutputInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add an output interface to the node",
								"returns": "The created interface or undefined, if the interface was not created\n"
							},
							"parameters": [
								{
									"id": 307,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the interface"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 308,
									"name": "additionalProperties",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Additional properties of the interface that can be used by plugins"
									},
									"type": {
										"type": "reference",
										"name": "Record",
										"typeArguments": [
											{
												"type": "intrinsic",
												"name": "string"
											},
											{
												"type": "intrinsic",
												"name": "any"
											}
										]
									}
								}
							],
							"type": {
								"type": "union",
								"types": [
									{
										"type": "intrinsic",
										"name": "undefined"
									},
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 139,
							"character": 32
						}
					]
				},
				{
					"id": 297,
					"name": "calculate",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 298,
							"name": "calculate",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "The default implementation does nothing.\nOverwrite this method to do calculation.",
								"returns": "This method can return a promise.\n"
							},
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 111,
							"character": 20
						}
					]
				},
				{
					"id": 322,
					"name": "getInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 323,
							"name": "getInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Get an interface by its name. If the node does not have an interface with\n\`name\`, this method will throw an error."
							},
							"parameters": [
								{
									"id": 324,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the requested interface\n"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeInterface",
								"id": 340
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 216,
							"character": 23
						}
					]
				},
				{
					"id": 325,
					"name": "getOptionValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 326,
							"name": "getOptionValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Get the value of option \`name\`"
							},
							"parameters": [
								{
									"id": 327,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the option\n"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 227,
							"character": 25
						}
					]
				},
				{
					"id": 292,
					"name": "load",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 293,
							"name": "load",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 294,
									"name": "state",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "INodeState",
										"id": 8
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 77,
							"character": 15
						}
					]
				},
				{
					"id": 332,
					"name": "registerEditor",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 333,
							"name": "registerEditor",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "This function will automatically be called as soon as the node is added to an editor."
							},
							"parameters": [
								{
									"id": 334,
									"name": "editor",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Editor instance\n"
									},
									"type": {
										"type": "reference",
										"name": "Editor",
										"id": 194
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 250,
							"character": 25
						}
					]
				},
				{
					"id": 309,
					"name": "removeInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 310,
							"name": "removeInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Remove an existing interface"
							},
							"parameters": [
								{
									"id": 311,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the interface.\n"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 151,
							"character": 29
						}
					]
				},
				{
					"id": 319,
					"name": "removeOption",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 320,
							"name": "removeOption",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Remove an existing option"
							},
							"parameters": [
								{
									"id": 321,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the option\n"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 202,
							"character": 26
						}
					]
				},
				{
					"id": 295,
					"name": "save",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 296,
							"name": "save",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"type": {
								"type": "reference",
								"name": "INodeState",
								"id": 8
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 94,
							"character": 15
						}
					]
				},
				{
					"id": 328,
					"name": "setOptionValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 329,
							"name": "setOptionValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Set the value of option \`name\`"
							},
							"parameters": [
								{
									"id": 330,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the option"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 331,
									"name": "value",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "New value\n"
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 239,
							"character": 25
						}
					]
				},
				{
					"id": 274,
					"name": "events",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 276,
							"name": "addInterface",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 42,
									"character": 20
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							},
							"defaultValue": " new BaklavaEvent<NodeInterface>()"
						},
						{
							"id": 280,
							"name": "addOption",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 46,
									"character": 17
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IOptionEventData",
										"id": 187
									}
								]
							},
							"defaultValue": " new BaklavaEvent<IOptionEventData>()"
						},
						{
							"id": 275,
							"name": "beforeAddInterface",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 41,
									"character": 26
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IAddInterfaceEventData",
										"id": 177
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IAddInterfaceEventData>()"
						},
						{
							"id": 279,
							"name": "beforeAddOption",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 45,
									"character": 23
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IAddOptionEventData",
										"id": 182
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IAddOptionEventData>()"
						},
						{
							"id": 277,
							"name": "beforeRemoveInterface",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 43,
									"character": 29
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<NodeInterface>()"
						},
						{
							"id": 281,
							"name": "beforeRemoveOption",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 47,
									"character": 26
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IOptionEventData",
										"id": 187
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<IOptionEventData>()"
						},
						{
							"id": 278,
							"name": "removeInterface",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 44,
									"character": 23
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "NodeInterface",
										"id": 340
									}
								]
							},
							"defaultValue": " new BaklavaEvent<NodeInterface>()"
						},
						{
							"id": 282,
							"name": "removeOption",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 48,
									"character": 20
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IOptionEventData",
										"id": 187
									}
								]
							},
							"defaultValue": " new BaklavaEvent<IOptionEventData>()"
						},
						{
							"id": 283,
							"name": "update",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 49,
									"character": 14
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "reference",
										"name": "INodeUpdateEventData",
										"id": 190
									}
								]
							},
							"defaultValue": " new BaklavaEvent<INodeUpdateEventData>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								276,
								280,
								275,
								279,
								277,
								281,
								278,
								282,
								283
							]
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 40,
							"character": 17
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				},
				{
					"id": 284,
					"name": "hooks",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 285,
							"name": "load",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 53,
									"character": 12
								}
							],
							"type": {
								"type": "reference",
								"name": "SequentialHook",
								"id": 66,
								"typeArguments": [
									{
										"type": "reference",
										"name": "INodeState",
										"id": 8
									}
								]
							},
							"defaultValue": " new SequentialHook<INodeState>()"
						},
						{
							"id": 286,
							"name": "save",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "node.ts",
									"line": 54,
									"character": 12
								}
							],
							"type": {
								"type": "reference",
								"name": "SequentialHook",
								"id": 66,
								"typeArguments": [
									{
										"type": "reference",
										"name": "INodeState",
										"id": 8
									}
								]
							},
							"defaultValue": " new SequentialHook<INodeState>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								285,
								286
							]
						}
					],
					"sources": [
						{
							"fileName": "node.ts",
							"line": 52,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						287,
						270,
						271,
						269,
						272,
						273,
						268
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						288,
						290
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						299,
						335,
						312,
						305,
						297,
						322,
						325,
						292,
						332,
						309,
						319,
						295,
						328
					]
				},
				{
					"title": "Object literals",
					"kind": 2097152,
					"children": [
						274,
						284
					]
				}
			],
			"sources": [
				{
					"fileName": "node.ts",
					"line": 18,
					"character": 26
				}
			]
		},
		{
			"id": 98,
			"name": "NodeBuilder",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "Utility class for creating custom nodes"
			},
			"children": [
				{
					"id": 103,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 104,
							"name": "new NodeBuilder",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {},
							"parameters": [
								{
									"id": 105,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeBuilder",
								"id": 98
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 59,
							"character": 47
						}
					]
				},
				{
					"id": 102,
					"name": "calcFunction",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 59,
							"character": 24
						}
					],
					"type": {
						"type": "reference",
						"name": "CalculationFunction",
						"id": 131
					}
				},
				{
					"id": 100,
					"name": "intfs",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 57,
							"character": 17
						}
					],
					"type": {
						"type": "array",
						"elementType": {
							"type": "reference",
							"name": "IInterfaceOptions",
							"id": 92
						}
					},
					"defaultValue": " []"
				},
				{
					"id": 99,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 56,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					},
					"defaultValue": "\"\""
				},
				{
					"id": 101,
					"name": "options",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 58,
							"character": 19
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "reference",
								"name": "IOption",
								"id": 145
							}
						]
					},
					"defaultValue": " new Map()"
				},
				{
					"id": 108,
					"name": "addInputInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 109,
							"name": "addInputInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add an input interface to the node",
								"returns": "Current node builder instance for chaining\n"
							},
							"parameters": [
								{
									"id": 110,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the interface"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 111,
									"name": "option",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "A node option component to be displayed when the interface is not connected"
									},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "intrinsic",
												"name": "undefined"
											},
											{
												"type": "intrinsic",
												"name": "string"
											}
										]
									}
								},
								{
									"id": 112,
									"name": "defaultValue",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "\nDefault value for the interface.\nIf the default value is a primitive (e. g. string, number) then the value can be passed directly.\nFor objects provide a function that returns the default value."
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								},
								{
									"id": 113,
									"name": "additionalProperties",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Additional properties of the interface that can be used by plugins"
									},
									"type": {
										"type": "reference",
										"name": "Record",
										"typeArguments": [
											{
												"type": "intrinsic",
												"name": "string"
											},
											{
												"type": "intrinsic",
												"name": "any"
											}
										]
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeBuilder",
								"id": 98
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 86,
							"character": 28
						}
					]
				},
				{
					"id": 118,
					"name": "addOption",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 119,
							"name": "addOption",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add a node option to the node",
								"returns": "Current node builder instance for chaining\n"
							},
							"parameters": [
								{
									"id": 120,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the option"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 121,
									"name": "optionComponent",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 122,
									"name": "defaultValue",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "\nDefault value for the option.\nIf the default value is a primitive (e. g. string, number) then the value can be passed directly.\nFor objects provide a function that returns the default value."
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								},
								{
									"id": 123,
									"name": "sidebarComponent",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Optional component to display in the sidebar"
									},
									"type": {
										"type": "union",
										"types": [
											{
												"type": "intrinsic",
												"name": "undefined"
											},
											{
												"type": "intrinsic",
												"name": "string"
											}
										]
									}
								},
								{
									"id": 124,
									"name": "additionalProperties",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Additional properties of the option that can be used by plugins"
									},
									"type": {
										"type": "reference",
										"name": "Record",
										"typeArguments": [
											{
												"type": "intrinsic",
												"name": "string"
											},
											{
												"type": "intrinsic",
												"name": "any"
											}
										]
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeBuilder",
								"id": 98
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 115,
							"character": 20
						}
					]
				},
				{
					"id": 114,
					"name": "addOutputInterface",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 115,
							"name": "addOutputInterface",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Add an output interface to the node",
								"returns": "Current node builder instance for chaining\n"
							},
							"parameters": [
								{
									"id": 116,
									"name": "name",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Name of the interface"
									},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 117,
									"name": "additionalProperties",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"comment": {
										"text": "Additional properties of the interface that can be used by plugins"
									},
									"type": {
										"type": "reference",
										"name": "Record",
										"typeArguments": [
											{
												"type": "intrinsic",
												"name": "string"
											},
											{
												"type": "intrinsic",
												"name": "any"
											}
										]
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeBuilder",
								"id": 98
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 98,
							"character": 29
						}
					]
				},
				{
					"id": 106,
					"name": "build",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 107,
							"name": "build",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Build the node class.\nThis must be called as the last operation when building a node.",
								"returns": "The generated node class\n"
							},
							"type": {
								"type": "reference",
								"name": "NodeConstructor",
								"id": 261
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 70,
							"character": 16
						}
					]
				},
				{
					"id": 128,
					"name": "checkDefaultValue",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 129,
							"name": "checkDefaultValue",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 130,
									"name": "v",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 139,
							"character": 29
						}
					]
				},
				{
					"id": 125,
					"name": "onCalculate",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 126,
							"name": "onCalculate",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Register a callback for the calculation function.\nThe callback will receive the node instance as first parameter.\n(If you do not use ES6 arrow functions, the node instance\nwill also be bound to \`this\`)",
								"returns": "Current node builder instance for chaining\n"
							},
							"parameters": [
								{
									"id": 127,
									"name": "cb",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "Callback to be executed when \`calculate()\` is called on the node"
									},
									"type": {
										"type": "reference",
										"name": "CalculationFunction",
										"id": 131
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeBuilder",
								"id": 98
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 134,
							"character": 22
						}
					]
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						103
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						102,
						100,
						99,
						101
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						108,
						118,
						114,
						106,
						128,
						125
					]
				}
			],
			"sources": [
				{
					"fileName": "nodeBuilder.ts",
					"line": 54,
					"character": 24
				}
			]
		},
		{
			"id": 340,
			"name": "NodeInterface",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 362,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 363,
							"name": "new NodeInterface",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {},
							"parameters": [
								{
									"id": 364,
									"name": "parent",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								},
								{
									"id": 365,
									"name": "isInput",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "boolean"
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeInterface",
								"id": 340
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 41,
							"character": 5
						}
					]
				},
				{
					"id": 352,
					"name": "_connectionCount",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 24,
							"character": 28
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "number"
					},
					"defaultValue": "0"
				},
				{
					"id": 357,
					"name": "_value",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 33,
							"character": 18
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					},
					"defaultValue": " null"
				},
				{
					"id": 341,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 8,
							"character": 13
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 342,
					"name": "isInput",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 9,
							"character": 18
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "boolean"
					}
				},
				{
					"id": 344,
					"name": "option",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 11,
							"character": 17
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				},
				{
					"id": 343,
					"name": "parent",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 10,
							"character": 17
						}
					],
					"type": {
						"type": "reference",
						"name": "Node",
						"id": 267
					}
				},
				{
					"id": 353,
					"name": "connectionCount",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"getSignature": [
						{
							"id": 356,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"type": {
								"type": "intrinsic",
								"name": "number"
							}
						}
					],
					"setSignature": [
						{
							"id": 354,
							"name": "__set",
							"kind": 1048576,
							"kindString": "Set signature",
							"flags": {},
							"parameters": [
								{
									"id": 355,
									"name": "v",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "number"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 25,
							"character": 30
						},
						{
							"fileName": "nodeInterface.ts",
							"line": 29,
							"character": 30
						}
					]
				},
				{
					"id": 358,
					"name": "value",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"getSignature": [
						{
							"id": 361,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"setSignature": [
						{
							"id": 359,
							"name": "__set",
							"kind": 1048576,
							"kindString": "Set signature",
							"flags": {},
							"parameters": [
								{
									"id": 360,
									"name": "v",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 34,
							"character": 20
						},
						{
							"fileName": "nodeInterface.ts",
							"line": 39,
							"character": 20
						}
					]
				},
				{
					"id": 366,
					"name": "load",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 367,
							"name": "load",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 368,
									"name": "state",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "IInterfaceState",
										"id": 16
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 49,
							"character": 15
						}
					]
				},
				{
					"id": 369,
					"name": "save",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 370,
							"name": "save",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"type": {
								"type": "reference",
								"name": "IInterfaceState",
								"id": 16
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 55,
							"character": 15
						}
					]
				},
				{
					"id": 345,
					"name": "events",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 347,
							"name": "beforeSetValue",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeInterface.ts",
									"line": 15,
									"character": 22
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "any"
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<any>()"
						},
						{
							"id": 346,
							"name": "setConnectionCount",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeInterface.ts",
									"line": 14,
									"character": 26
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "number"
									}
								]
							},
							"defaultValue": " new BaklavaEvent<number>()"
						},
						{
							"id": 348,
							"name": "setValue",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeInterface.ts",
									"line": 16,
									"character": 16
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "any"
									}
								]
							},
							"defaultValue": " new BaklavaEvent<any>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								347,
								346,
								348
							]
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 13,
							"character": 17
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				},
				{
					"id": 349,
					"name": "hooks",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 350,
							"name": "load",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeInterface.ts",
									"line": 20,
									"character": 12
								}
							],
							"type": {
								"type": "reference",
								"name": "SequentialHook",
								"id": 66,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IInterfaceState",
										"id": 16
									}
								]
							},
							"defaultValue": " new SequentialHook<IInterfaceState>()"
						},
						{
							"id": 351,
							"name": "save",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeInterface.ts",
									"line": 21,
									"character": 12
								}
							],
							"type": {
								"type": "reference",
								"name": "SequentialHook",
								"id": 66,
								"typeArguments": [
									{
										"type": "reference",
										"name": "IInterfaceState",
										"id": 16
									}
								]
							},
							"defaultValue": " new SequentialHook<IInterfaceState>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								350,
								351
							]
						}
					],
					"sources": [
						{
							"fileName": "nodeInterface.ts",
							"line": 19,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						362
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						352,
						357,
						341,
						342,
						344,
						343
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						353,
						358
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						366,
						369
					]
				},
				{
					"title": "Object literals",
					"kind": 2097152,
					"children": [
						345,
						349
					]
				}
			],
			"sources": [
				{
					"fileName": "nodeInterface.ts",
					"line": 6,
					"character": 26
				}
			]
		},
		{
			"id": 149,
			"name": "NodeOption",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 156,
					"name": "constructor",
					"kind": 512,
					"kindString": "Constructor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 157,
							"name": "new NodeOption",
							"kind": 16384,
							"kindString": "Constructor signature",
							"flags": {},
							"parameters": [
								{
									"id": 158,
									"name": "optionComponent",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "string"
									}
								},
								{
									"id": 159,
									"name": "value",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								},
								{
									"id": 160,
									"name": "sidebarComponent",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {
										"isOptional": true
									},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								}
							],
							"type": {
								"type": "reference",
								"name": "NodeOption",
								"id": 149
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 21,
							"character": 24
						}
					]
				},
				{
					"id": 155,
					"name": "_value",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPrivate": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 21,
							"character": 18
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				},
				{
					"id": 150,
					"name": "optionComponent",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"comment": {
						"shortText": "Name of the component that should be displayed for the option"
					},
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 12,
							"character": 26
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					},
					"implementationOf": {
						"type": "reference",
						"name": "IOption.optionComponent",
						"id": 146
					}
				},
				{
					"id": 151,
					"name": "sidebarComponent",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isPublic": true,
						"isExported": true,
						"isOptional": true
					},
					"comment": {
						"shortText": "Name of the component that should be displayed in the sidebar"
					},
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 14,
							"character": 27
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					},
					"implementationOf": {
						"type": "reference",
						"name": "IOption.sidebarComponent",
						"id": 148
					}
				},
				{
					"id": 161,
					"name": "value",
					"kind": 262144,
					"kindString": "Accessor",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"getSignature": [
						{
							"id": 162,
							"name": "__get",
							"kind": 524288,
							"kindString": "Get signature",
							"flags": {},
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"setSignature": [
						{
							"id": 163,
							"name": "__set",
							"kind": 1048576,
							"kindString": "Set signature",
							"flags": {},
							"parameters": [
								{
									"id": 164,
									"name": "v",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "intrinsic",
										"name": "any"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 29,
							"character": 20
						},
						{
							"fileName": "nodeOption.ts",
							"line": 33,
							"character": 20
						}
					],
					"implementationOf": {
						"type": "reference",
						"name": "IOption.value",
						"id": 147
					}
				},
				{
					"id": 152,
					"name": "events",
					"kind": 2097152,
					"kindString": "Object literal",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"children": [
						{
							"id": 153,
							"name": "beforeSetValue",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeOption.ts",
									"line": 17,
									"character": 22
								}
							],
							"type": {
								"type": "reference",
								"name": "PreventableBaklavaEvent",
								"id": 38,
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "any"
									}
								]
							},
							"defaultValue": " new PreventableBaklavaEvent<any>()"
						},
						{
							"id": 154,
							"name": "setValue",
							"kind": 32,
							"kindString": "Variable",
							"flags": {
								"isExported": true
							},
							"sources": [
								{
									"fileName": "nodeOption.ts",
									"line": 18,
									"character": 16
								}
							],
							"type": {
								"type": "reference",
								"name": "BaklavaEvent",
								"id": 25,
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "any"
									}
								]
							},
							"defaultValue": " new BaklavaEvent<any>()"
						}
					],
					"groups": [
						{
							"title": "Variables",
							"kind": 32,
							"children": [
								153,
								154
							]
						}
					],
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 16,
							"character": 17
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "object"
					}
				}
			],
			"groups": [
				{
					"title": "Constructors",
					"kind": 512,
					"children": [
						156
					]
				},
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						155,
						150,
						151
					]
				},
				{
					"title": "Accessors",
					"kind": 262144,
					"children": [
						161
					]
				},
				{
					"title": "Object literals",
					"kind": 2097152,
					"children": [
						152
					]
				}
			],
			"sources": [
				{
					"fileName": "nodeOption.ts",
					"line": 9,
					"character": 23
				}
			],
			"implementedTypes": [
				{
					"type": "reference",
					"name": "IOption",
					"id": 145
				}
			]
		},
		{
			"id": 38,
			"name": "PreventableBaklavaEvent",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "Extension for the [[BaklavaEvent]] class. A listener can return \`false\` to prevent\nthis event from happening."
			},
			"typeParameter": [
				{
					"id": 39,
					"name": "T",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				}
			],
			"children": [
				{
					"id": 43,
					"name": "listeners",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 8,
							"character": 23
						}
					],
					"type": {
						"type": "reference",
						"name": "Map",
						"typeArguments": [
							{
								"type": "reference",
								"name": "TokenType",
								"id": 80
							},
							{
								"type": "reference",
								"name": "Listener",
								"id": 81,
								"typeArguments": [
									{
										"type": "typeParameter",
										"name": "T"
									}
								]
							}
						]
					},
					"defaultValue": " new Map()",
					"inheritedFrom": {
						"type": "reference",
						"name": "BaklavaEvent.listeners",
						"id": 27
					}
				},
				{
					"id": 44,
					"name": "addListener",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 45,
							"name": "addListener",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Subscribe to the event"
							},
							"parameters": [
								{
									"id": 46,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "A token that can be used to unsubscribe from the event later on"
									},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								},
								{
									"id": 47,
									"name": "listener",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "A callback that will be invoked when the event occurs\n"
									},
									"type": {
										"type": "reference",
										"name": "Listener",
										"id": 81,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											}
										]
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							},
							"inheritedFrom": {
								"type": "reference",
								"name": "BaklavaEvent.addListener",
								"id": 28
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 15,
							"character": 22
						}
					],
					"inheritedFrom": {
						"type": "reference",
						"name": "BaklavaEvent.addListener",
						"id": 28
					}
				},
				{
					"id": 40,
					"name": "emit",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 41,
							"name": "emit",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Invoke all listeners.",
								"returns": "\`true\` when one of the listeners requested to prevent the event, otherwise \`false\`\n"
							},
							"parameters": [
								{
									"id": 42,
									"name": "data",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "The data to invoke all listeners with"
									},
									"type": {
										"type": "typeParameter",
										"name": "T"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "boolean"
							},
							"overwrites": {
								"type": "reference",
								"name": "BaklavaEvent.emit",
								"id": 35
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 50,
							"character": 8
						}
					],
					"overwrites": {
						"type": "reference",
						"name": "BaklavaEvent.emit",
						"id": 35
					}
				},
				{
					"id": 48,
					"name": "removeListener",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 49,
							"name": "removeListener",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"comment": {
								"shortText": "Remove a listener"
							},
							"parameters": [
								{
									"id": 50,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"comment": {
										"text": "The token that was specified when subscribing to the listener.\nAn invalid token does not result in an error.\n"
									},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							},
							"inheritedFrom": {
								"type": "reference",
								"name": "BaklavaEvent.removeListener",
								"id": 32
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 24,
							"character": 25
						}
					],
					"inheritedFrom": {
						"type": "reference",
						"name": "BaklavaEvent.removeListener",
						"id": 32
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						43
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						44,
						40,
						48
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 43,
					"character": 36
				}
			],
			"extendedTypes": [
				{
					"type": "reference",
					"name": "BaklavaEvent",
					"id": 25,
					"typeArguments": [
						{
							"type": "typeParameter",
							"name": "T"
						}
					]
				}
			]
		},
		{
			"id": 66,
			"name": "SequentialHook",
			"kind": 128,
			"kindString": "Class",
			"flags": {
				"isExported": true
			},
			"comment": {
				"shortText": "This class will run the taps one after each other and pass the data from every tap to another."
			},
			"typeParameter": [
				{
					"id": 67,
					"name": "T",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				},
				{
					"id": 71,
					"name": "O",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				}
			],
			"children": [
				{
					"id": 72,
					"name": "taps",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isProtected": true,
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 65,
							"character": 18
						}
					],
					"type": {
						"type": "reference",
						"name": "Array",
						"typeArguments": [
							{
								"type": "reference",
								"name": "HookTap",
								"id": 86,
								"typeArguments": [
									{
										"type": "typeParameter",
										"name": "T"
									},
									{
										"type": "typeParameter",
										"name": "O"
									}
								]
							}
						]
					},
					"defaultValue": " []",
					"inheritedFrom": {
						"type": "reference",
						"name": "Hook.taps",
						"id": 55
					}
				},
				{
					"id": 68,
					"name": "execute",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 69,
							"name": "execute",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 70,
									"name": "data",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "typeParameter",
										"name": "T"
									}
								}
							],
							"type": {
								"type": "typeParameter",
								"name": "T"
							},
							"overwrites": {
								"type": "reference",
								"name": "Hook.execute",
								"id": 63
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 91,
							"character": 18
						}
					],
					"overwrites": {
						"type": "reference",
						"name": "Hook.execute",
						"id": 63
					}
				},
				{
					"id": 73,
					"name": "tap",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 74,
							"name": "tap",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 75,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								},
								{
									"id": 76,
									"name": "tapFn",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "HookTap",
										"id": 86,
										"typeArguments": [
											{
												"type": "typeParameter",
												"name": "T"
											},
											{
												"type": "typeParameter",
												"name": "O"
											}
										]
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							},
							"inheritedFrom": {
								"type": "reference",
								"name": "Hook.tap",
								"id": 56
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 67,
							"character": 14
						}
					],
					"inheritedFrom": {
						"type": "reference",
						"name": "Hook.tap",
						"id": 56
					}
				},
				{
					"id": 77,
					"name": "untap",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isPublic": true,
						"isExported": true
					},
					"signatures": [
						{
							"id": 78,
							"name": "untap",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 79,
									"name": "token",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "TokenType",
										"id": 80
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							},
							"inheritedFrom": {
								"type": "reference",
								"name": "Hook.untap",
								"id": 60
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 75,
							"character": 16
						}
					],
					"inheritedFrom": {
						"type": "reference",
						"name": "Hook.untap",
						"id": 60
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						72
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						68,
						73,
						77
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 89,
					"character": 27
				}
			],
			"extendedTypes": [
				{
					"type": "reference",
					"name": "Hook",
					"id": 51,
					"typeArguments": [
						{
							"type": "typeParameter",
							"name": "T"
						}
					]
				}
			]
		},
		{
			"id": 170,
			"name": "IAddConnectionEventData",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 171,
					"name": "from",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 6,
							"character": 8
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				},
				{
					"id": 172,
					"name": "to",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 7,
							"character": 6
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						171,
						172
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventDataTypes.ts",
					"line": 5,
					"character": 40
				}
			]
		},
		{
			"id": 177,
			"name": "IAddInterfaceEventData",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 181,
					"name": "defaultValue",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 21,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				},
				{
					"id": 179,
					"name": "isInput",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 19,
							"character": 11
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "boolean"
					}
				},
				{
					"id": 178,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 18,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 180,
					"name": "option",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 20,
							"character": 10
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						181,
						179,
						178,
						180
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventDataTypes.ts",
					"line": 17,
					"character": 39
				}
			]
		},
		{
			"id": 173,
			"name": "IAddNodeTypeEventData",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 176,
					"name": "category",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 13,
							"character": 12
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 175,
					"name": "type",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 12,
							"character": 8
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeConstructor",
						"id": 261
					}
				},
				{
					"id": 174,
					"name": "typeName",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 11,
							"character": 12
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						176,
						175,
						174
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventDataTypes.ts",
					"line": 10,
					"character": 38
				}
			]
		},
		{
			"id": 182,
			"name": "IAddOptionEventData",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 184,
					"name": "component",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 26,
							"character": 13
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 185,
					"name": "defaultValue",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 27,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				},
				{
					"id": 183,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 25,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 186,
					"name": "sidebarComponent",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 28,
							"character": 20
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						184,
						185,
						183,
						186
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventDataTypes.ts",
					"line": 24,
					"character": 36
				}
			]
		},
		{
			"id": 381,
			"name": "IConnection",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 383,
					"name": "from",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 21,
							"character": 8
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				},
				{
					"id": 382,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 20,
							"character": 6
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 384,
					"name": "to",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 22,
							"character": 6
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						383,
						382,
						384
					]
				}
			],
			"sources": [
				{
					"fileName": "connection.ts",
					"line": 19,
					"character": 28
				}
			],
			"implementedBy": [
				{
					"type": "reference",
					"name": "DummyConnection",
					"id": 399
				}
			]
		},
		{
			"id": 20,
			"name": "IConnectionState",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 22,
					"name": "from",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 22,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 21,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 21,
							"character": 6
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 23,
					"name": "to",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 23,
							"character": 6
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						22,
						21,
						23
					]
				}
			],
			"sources": [
				{
					"fileName": "state.ts",
					"line": 20,
					"character": 33
				}
			],
			"extendedTypes": [
				{
					"type": "reflection",
					"declaration": {
						"id": 24,
						"name": "__type",
						"kind": 65536,
						"kindString": "Type literal",
						"flags": {},
						"sources": [
							{
								"fileName": "state.ts",
								"line": 20,
								"character": 41
							}
						]
					}
				}
			]
		},
		{
			"id": 263,
			"name": "IInterfaceCreateOptions",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 265,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 11,
							"character": 8
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				},
				{
					"id": 266,
					"name": "optionName",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 12,
							"character": 14
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				},
				{
					"id": 264,
					"name": "type",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "node.ts",
							"line": 10,
							"character": 8
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						265,
						266,
						264
					]
				}
			],
			"sources": [
				{
					"fileName": "node.ts",
					"line": 9,
					"character": 40
				}
			]
		},
		{
			"id": 92,
			"name": "IInterfaceOptions",
			"kind": 256,
			"kindString": "Interface",
			"flags": {},
			"children": [
				{
					"id": 97,
					"name": "additionalProperties",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 8,
							"character": 24
						}
					],
					"type": {
						"type": "reference",
						"name": "Record",
						"typeArguments": [
							{
								"type": "intrinsic",
								"name": "string"
							},
							{
								"type": "intrinsic",
								"name": "any"
							}
						]
					}
				},
				{
					"id": 96,
					"name": "defaultValue",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 7,
							"character": 16
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				},
				{
					"id": 93,
					"name": "isInput",
					"kind": 1024,
					"kindString": "Property",
					"flags": {},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 4,
							"character": 11
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "boolean"
					}
				},
				{
					"id": 94,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 5,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 95,
					"name": "option",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 6,
							"character": 10
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						97,
						96,
						93,
						94,
						95
					]
				}
			],
			"sources": [
				{
					"fileName": "nodeBuilder.ts",
					"line": 3,
					"character": 27
				}
			]
		},
		{
			"id": 16,
			"name": "IInterfaceState",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 17,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 16,
							"character": 6
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 18,
					"name": "value",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 17,
							"character": 9
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						17,
						18
					]
				}
			],
			"sources": [
				{
					"fileName": "state.ts",
					"line": 15,
					"character": 32
				}
			],
			"extendedTypes": [
				{
					"type": "reflection",
					"declaration": {
						"id": 19,
						"name": "__type",
						"kind": 65536,
						"kindString": "Type literal",
						"flags": {},
						"sources": [
							{
								"fileName": "state.ts",
								"line": 15,
								"character": 40
							}
						]
					}
				}
			]
		},
		{
			"id": 8,
			"name": "INodeState",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 11,
					"name": "id",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 9,
							"character": 6
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 12,
					"name": "interfaces",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 10,
							"character": 14
						}
					],
					"type": {
						"type": "reference",
						"name": "Array",
						"typeArguments": [
							{
								"type": "tuple",
								"elements": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "reference",
										"name": "IInterfaceState",
										"id": 16
									}
								]
							}
						]
					}
				},
				{
					"id": 10,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 8,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 13,
					"name": "options",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 11,
							"character": 11
						}
					],
					"type": {
						"type": "reference",
						"name": "Array",
						"typeArguments": [
							{
								"type": "tuple",
								"elements": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "intrinsic",
										"name": "any"
									}
								]
							}
						]
					}
				},
				{
					"id": 14,
					"name": "state",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 12,
							"character": 9
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				},
				{
					"id": 9,
					"name": "type",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 7,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						11,
						12,
						10,
						13,
						14,
						9
					]
				}
			],
			"sources": [
				{
					"fileName": "state.ts",
					"line": 6,
					"character": 27
				}
			],
			"extendedTypes": [
				{
					"type": "reflection",
					"declaration": {
						"id": 15,
						"name": "__type",
						"kind": 65536,
						"kindString": "Type literal",
						"flags": {},
						"sources": [
							{
								"fileName": "state.ts",
								"line": 6,
								"character": 35
							}
						]
					}
				}
			]
		},
		{
			"id": 190,
			"name": "INodeUpdateEventData",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 193,
					"name": "interface",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 39,
							"character": 13
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				},
				{
					"id": 191,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 37,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 192,
					"name": "option",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 38,
							"character": 10
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeOption",
						"id": 149
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						193,
						191,
						192
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventDataTypes.ts",
					"line": 36,
					"character": 37
				}
			]
		},
		{
			"id": 145,
			"name": "IOption",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 146,
					"name": "optionComponent",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 4,
							"character": 19
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 148,
					"name": "sidebarComponent",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 6,
							"character": 20
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "string"
							}
						]
					}
				},
				{
					"id": 147,
					"name": "value",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "nodeOption.ts",
							"line": 5,
							"character": 9
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						146,
						148,
						147
					]
				}
			],
			"sources": [
				{
					"fileName": "nodeOption.ts",
					"line": 3,
					"character": 24
				}
			],
			"implementedBy": [
				{
					"type": "reference",
					"name": "NodeOption",
					"id": 149
				}
			]
		},
		{
			"id": 187,
			"name": "IOptionEventData",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 188,
					"name": "name",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 32,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 189,
					"name": "option",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "events/eventDataTypes.ts",
							"line": 33,
							"character": 10
						}
					],
					"type": {
						"type": "reference",
						"name": "IOption",
						"id": 145
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						188,
						189
					]
				}
			],
			"sources": [
				{
					"fileName": "events/eventDataTypes.ts",
					"line": 31,
					"character": 33
				}
			]
		},
		{
			"id": 165,
			"name": "IPlugin",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 166,
					"name": "type",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "plugin.ts",
							"line": 4,
							"character": 8
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				},
				{
					"id": 167,
					"name": "register",
					"kind": 2048,
					"kindString": "Method",
					"flags": {
						"isExported": true
					},
					"signatures": [
						{
							"id": 168,
							"name": "register",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 169,
									"name": "editor",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "Editor",
										"id": 194
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "void"
							}
						}
					],
					"sources": [
						{
							"fileName": "plugin.ts",
							"line": 5,
							"character": 12
						}
					]
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						166
					]
				},
				{
					"title": "Methods",
					"kind": 2048,
					"children": [
						167
					]
				}
			],
			"sources": [
				{
					"fileName": "plugin.ts",
					"line": 3,
					"character": 24
				}
			]
		},
		{
			"id": 4,
			"name": "IState",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 6,
					"name": "connections",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 3,
							"character": 15
						}
					],
					"type": {
						"type": "array",
						"elementType": {
							"type": "reference",
							"name": "IConnectionState",
							"id": 20
						}
					}
				},
				{
					"id": 5,
					"name": "nodes",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "state.ts",
							"line": 2,
							"character": 9
						}
					],
					"type": {
						"type": "array",
						"elementType": {
							"type": "reference",
							"name": "INodeState",
							"id": 8
						}
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						6,
						5
					]
				}
			],
			"sources": [
				{
					"fileName": "state.ts",
					"line": 1,
					"character": 23
				}
			],
			"extendedTypes": [
				{
					"type": "reflection",
					"declaration": {
						"id": 7,
						"name": "__type",
						"kind": 65536,
						"kindString": "Type literal",
						"flags": {},
						"sources": [
							{
								"fileName": "state.ts",
								"line": 1,
								"character": 31
							}
						]
					}
				}
			]
		},
		{
			"id": 375,
			"name": "ITemporaryConnection",
			"kind": 256,
			"kindString": "Interface",
			"flags": {
				"isExported": true
			},
			"children": [
				{
					"id": 377,
					"name": "from",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 13,
							"character": 8
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				},
				{
					"id": 379,
					"name": "mx",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 15,
							"character": 6
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "number"
							}
						]
					}
				},
				{
					"id": 380,
					"name": "my",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 16,
							"character": 6
						}
					],
					"type": {
						"type": "union",
						"types": [
							{
								"type": "intrinsic",
								"name": "undefined"
							},
							{
								"type": "intrinsic",
								"name": "number"
							}
						]
					}
				},
				{
					"id": 376,
					"name": "status",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 12,
							"character": 10
						}
					],
					"type": {
						"type": "reference",
						"name": "TemporaryConnectionState",
						"id": 371
					}
				},
				{
					"id": 378,
					"name": "to",
					"kind": 1024,
					"kindString": "Property",
					"flags": {
						"isExported": true,
						"isOptional": true
					},
					"sources": [
						{
							"fileName": "connection.ts",
							"line": 14,
							"character": 6
						}
					],
					"type": {
						"type": "reference",
						"name": "NodeInterface",
						"id": 340
					}
				}
			],
			"groups": [
				{
					"title": "Properties",
					"kind": 1024,
					"children": [
						377,
						379,
						380,
						376,
						378
					]
				}
			],
			"sources": [
				{
					"fileName": "connection.ts",
					"line": 11,
					"character": 37
				}
			]
		},
		{
			"id": 131,
			"name": "CalculationFunction",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {},
			"sources": [
				{
					"fileName": "nodeBuilder.ts",
					"line": 11,
					"character": 24
				}
			],
			"type": {
				"type": "reflection",
				"declaration": {
					"id": 132,
					"name": "__type",
					"kind": 65536,
					"kindString": "Type literal",
					"flags": {},
					"signatures": [
						{
							"id": 133,
							"name": "__call",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 134,
									"name": "this",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								},
								{
									"id": 135,
									"name": "n",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "reference",
										"name": "Node",
										"id": 267
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"sources": [
						{
							"fileName": "nodeBuilder.ts",
							"line": 11,
							"character": 26
						}
					]
				}
			}
		},
		{
			"id": 86,
			"name": "HookTap",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true
			},
			"typeParameter": [
				{
					"id": 87,
					"name": "I",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				},
				{
					"id": 88,
					"name": "O",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				}
			],
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 3,
					"character": 19
				}
			],
			"type": {
				"type": "reflection",
				"declaration": {
					"id": 89,
					"name": "__type",
					"kind": 65536,
					"kindString": "Type literal",
					"flags": {},
					"signatures": [
						{
							"id": 90,
							"name": "__call",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 91,
									"name": "i",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "typeParameter",
										"name": "I"
									}
								}
							],
							"type": {
								"type": "typeParameter",
								"name": "O"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 3,
							"character": 27
						}
					]
				}
			}
		},
		{
			"id": 81,
			"name": "Listener",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true
			},
			"typeParameter": [
				{
					"id": 82,
					"name": "T",
					"kind": 131072,
					"kindString": "Type parameter",
					"flags": {}
				}
			],
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 2,
					"character": 20
				}
			],
			"type": {
				"type": "reflection",
				"declaration": {
					"id": 83,
					"name": "__type",
					"kind": 65536,
					"kindString": "Type literal",
					"flags": {},
					"signatures": [
						{
							"id": 84,
							"name": "__call",
							"kind": 4096,
							"kindString": "Call signature",
							"flags": {},
							"parameters": [
								{
									"id": 85,
									"name": "ev",
									"kind": 32768,
									"kindString": "Parameter",
									"flags": {},
									"type": {
										"type": "typeParameter",
										"name": "T"
									}
								}
							],
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"sources": [
						{
							"fileName": "events/eventEmitter.ts",
							"line": 2,
							"character": 25
						}
					]
				}
			}
		},
		{
			"id": 261,
			"name": "NodeConstructor",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true
			},
			"sources": [
				{
					"fileName": "editor.ts",
					"line": 8,
					"character": 27
				}
			],
			"type": {
				"type": "reflection",
				"declaration": {
					"id": 262,
					"name": "__type",
					"kind": 65536,
					"kindString": "Type literal",
					"flags": {},
					"sources": [
						{
							"fileName": "editor.ts",
							"line": 8,
							"character": 29
						}
					]
				}
			}
		},
		{
			"id": 80,
			"name": "TokenType",
			"kind": 4194304,
			"kindString": "Type alias",
			"flags": {
				"isExported": true
			},
			"sources": [
				{
					"fileName": "events/eventEmitter.ts",
					"line": 1,
					"character": 21
				}
			],
			"type": {
				"type": "union",
				"types": [
					{
						"type": "intrinsic",
						"name": "object"
					},
					{
						"type": "intrinsic",
						"name": "symbol"
					}
				]
			}
		},
		{
			"id": 1,
			"name": "counter",
			"kind": 32,
			"kindString": "Variable",
			"flags": {
				"isLet": true
			},
			"sources": [
				{
					"fileName": "idGenerator.ts",
					"line": 1,
					"character": 11
				}
			],
			"type": {
				"type": "intrinsic",
				"name": "number"
			},
			"defaultValue": "0"
		},
		{
			"id": 2,
			"name": "generateId",
			"kind": 64,
			"kindString": "Function",
			"flags": {
				"isExported": true
			},
			"signatures": [
				{
					"id": 3,
					"name": "generateId",
					"kind": 4096,
					"kindString": "Call signature",
					"flags": {},
					"type": {
						"type": "intrinsic",
						"name": "string"
					}
				}
			],
			"sources": [
				{
					"fileName": "idGenerator.ts",
					"line": 3,
					"character": 34
				}
			]
		},
		{
			"id": 139,
			"name": "generateNode",
			"kind": 64,
			"kindString": "Function",
			"flags": {},
			"signatures": [
				{
					"id": 140,
					"name": "generateNode",
					"kind": 4096,
					"kindString": "Call signature",
					"flags": {},
					"parameters": [
						{
							"id": 141,
							"name": "type",
							"kind": 32768,
							"kindString": "Parameter",
							"flags": {},
							"type": {
								"type": "intrinsic",
								"name": "string"
							}
						},
						{
							"id": 142,
							"name": "intfs",
							"kind": 32768,
							"kindString": "Parameter",
							"flags": {},
							"type": {
								"type": "array",
								"elementType": {
									"type": "reference",
									"name": "IInterfaceOptions",
									"id": 92
								}
							}
						},
						{
							"id": 143,
							"name": "options",
							"kind": 32768,
							"kindString": "Parameter",
							"flags": {},
							"type": {
								"type": "reference",
								"name": "Map",
								"typeArguments": [
									{
										"type": "intrinsic",
										"name": "string"
									},
									{
										"type": "reference",
										"name": "IOption",
										"id": 145
									}
								]
							}
						},
						{
							"id": 144,
							"name": "calcFunction",
							"kind": 32768,
							"kindString": "Parameter",
							"flags": {
								"isOptional": true
							},
							"type": {
								"type": "reference",
								"name": "CalculationFunction",
								"id": 131
							}
						}
					],
					"type": {
						"type": "reference",
						"name": "(Anonymous class)"
					}
				}
			],
			"sources": [
				{
					"fileName": "nodeBuilder.ts",
					"line": 21,
					"character": 21
				}
			]
		},
		{
			"id": 136,
			"name": "getDefaultValue",
			"kind": 64,
			"kindString": "Function",
			"flags": {},
			"signatures": [
				{
					"id": 137,
					"name": "getDefaultValue",
					"kind": 4096,
					"kindString": "Call signature",
					"flags": {},
					"parameters": [
						{
							"id": 138,
							"name": "v",
							"kind": 32768,
							"kindString": "Parameter",
							"flags": {},
							"type": {
								"type": "intrinsic",
								"name": "any"
							}
						}
					],
					"type": {
						"type": "intrinsic",
						"name": "any"
					}
				}
			],
			"sources": [
				{
					"fileName": "nodeBuilder.ts",
					"line": 13,
					"character": 24
				}
			]
		}
	],
	"groups": [
		{
			"title": "Enumerations",
			"kind": 4,
			"children": [
				371
			]
		},
		{
			"title": "Classes",
			"kind": 128,
			"children": [
				25,
				385,
				399,
				194,
				51,
				267,
				98,
				340,
				149,
				38,
				66
			]
		},
		{
			"title": "Interfaces",
			"kind": 256,
			"children": [
				170,
				177,
				173,
				182,
				381,
				20,
				263,
				92,
				16,
				8,
				190,
				145,
				187,
				165,
				4,
				375
			]
		},
		{
			"title": "Type aliases",
			"kind": 4194304,
			"children": [
				131,
				86,
				81,
				261,
				80
			]
		},
		{
			"title": "Variables",
			"kind": 32,
			"children": [
				1
			]
		},
		{
			"title": "Functions",
			"kind": 64,
			"children": [
				2,
				139,
				136
			]
		}
	]
}`);
