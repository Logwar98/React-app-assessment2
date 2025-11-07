

export var simplemaps_countrymap_mapdata={
  main_settings: {
    //General settings
		width: "responsive", //or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    pop_ups: "detect",
    
		//State defaults
		state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
		//Location defaults
		location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
		//Label defaults
		label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
		//Zoom settings
		zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
		//Popup settings
		popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
		//Advanced settings
		div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website"
  },
  state_specific: {
    NZAUK: {
      name: "Auckland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZBOP: {
      name: "Bay of Plenty",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZCAN: {
      name: "Canterbury",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZGIS: {
      name: "Gisborne District",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZHKB: {
      name: "Hawke's Bay",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZMBH: {
      name: "Marlborough District",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZMWT: {
      name: "Manawatu-Wanganui",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZNSN: {
      name: "Nelson City",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZNTL: {
      name: "Northland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZOTA: {
      name: "Otago",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZSTL: {
      name: "Southland",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZTAS: {
      name: "Tasman District",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZTKI: {
      name: "Taranaki",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZWGN: {
      name: "Wellington",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZWKO: {
      name: "Waikato",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    },
    NZWTC: {
      name: "West Coast",
      description: "default",
      color: "default",
      hover_color: "default",
      url: "default"
    }
  },
  locations: {
    "0": {
      name: "Wellington",
      lat: "-41.3",
      lng: "174.783333"
    }
  },
  labels: {
    NZAUK: {
      name: "Auckland",
      parent_id: "NZAUK"
    },
    NZBOP: {
      name: "Bay of Plenty",
      parent_id: "NZBOP"
    },
    NZCAN: {
      name: "Canterbury",
      parent_id: "NZCAN"
    },
    NZGIS: {
      name: "Gisborne District",
      parent_id: "NZGIS"
    },
    NZHKB: {
      name: "Hawke's Bay",
      parent_id: "NZHKB"
    },
    NZMBH: {
      name: "Marlborough District",
      parent_id: "NZMBH"
    },
    NZMWT: {
      name: "Manawatu-Wanganui",
      parent_id: "NZMWT"
    },
    NZNSN: {
      name: "Nelson City",
      parent_id: "NZNSN"
    },
    NZNTL: {
      name: "Northland",
      parent_id: "NZNTL"
    },
    NZOTA: {
      name: "Otago",
      parent_id: "NZOTA"
    },
    NZSTL: {
      name: "Southland",
      parent_id: "NZSTL"
    },
    NZTAS: {
      name: "Tasman District",
      parent_id: "NZTAS"
    },
    NZTKI: {
      name: "Taranaki",
      parent_id: "NZTKI"
    },
    NZWGN: {
      name: "Wellington",
      parent_id: "NZWGN"
    },
    NZWKO: {
      name: "Waikato",
      parent_id: "NZWKO"
    },
    NZWTC: {
      name: "West Coast",
      parent_id: "NZWTC"
    }
  }
};