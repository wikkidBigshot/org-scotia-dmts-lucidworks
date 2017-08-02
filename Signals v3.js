﻿{
  "title": "Signals v3",
  "services": {
    "query": {
      "idQueue": [
        1,
        2,
        3,
        4
      ],
      "list": {
        "0": {
          "query": "*:*",
          "alias": "",
          "color": "#7EB26D",
          "id": 0,
          "pin": false,
          "type": "lucene"
        }
      },
      "ids": [
        0
      ]
    },
    "filter": {
      "idQueue": [
        1,
        2
      ],
      "list": {
        "0": {
          "from": "NOW/YEAR-1YEAR",
          "to": "NOW/YEAR%2B1YEAR",
          "field": "timestamp_tdt",
          "type": "time",
          "fromDateObj": "2016-07-31T13:45:12.882Z",
          "toDateObj": "2017-07-31T13:45:12.882Z",
          "mandate": "must",
          "active": true,
          "alias": "",
          "id": 0
        }
      },
      "ids": [
        0
      ]
    }
  },
  "rows": [
    {
      "title": "Query and Time Window",
      "height": "50px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "error": "",
          "span": 6,
          "editable": true,
          "type": "timepicker",
          "loadingEditor": false,
          "status": "Stable",
          "mode": "relative",
          "time_options": [
            "5m",
            "15m",
            "1h",
            "6h",
            "12h",
            "24h",
            "7d",
            "30d",
            "90d",
            "1y",
            "5y"
          ],
          "timespan": "1y",
          "timefield": "timestamp_tdt",
          "timeformat": "",
          "refresh": {
            "enable": false,
            "interval": 30,
            "min": 3
          },
          "filter_id": 0,
          "spyable": true,
          "title": "Time Window"
        },
        {
          "error": false,
          "span": 4,
          "editable": true,
          "group": [
            "default"
          ],
          "type": "query",
          "label": "Search",
          "history": [
            "*:*"
          ],
          "remember": 10,
          "pinned": true,
          "query": "*:*",
          "title": "Search",
          "spyable": true,
          "def_type": ""
        },
        {
          "span": 2,
          "editable": true,
          "type": "hits",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&stats=true&stats.field=id&wt=json&rows=0\n",
            "basic_query": "",
            "custom": ""
          },
          "style": {
            "font-size": "14pt"
          },
          "arrangement": "horizontal",
          "chart": "total",
          "counter_pos": "above",
          "donut": false,
          "tilt": false,
          "labels": true,
          "spyable": true,
          "title": "Total Hits",
          "show_queries": true,
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "metrics": [
            {
              "type": "count",
              "field": "id",
              "decimalDigits": 0,
              "label": "",
              "value": "11"
            }
          ]
        }
      ]
    },
    {
      "title": "Filters",
      "height": "240px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "span": 6,
          "editable": true,
          "type": "histogram",
          "loadingEditor": false,
          "mode": "count",
          "time_field": "timestamp_tdt",
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&rows=0&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.range=timestamp_tdt&facet.range.start=NOW/YEAR-1YEAR&facet.range.end=NOW/YEAR%2B1YEAR&facet.range.gap=%2B1DAY\n",
            "custom": ""
          },
          "max_rows": 100000,
          "value_field": null,
          "group_field": null,
          "auto_int": true,
          "resolution": 100,
          "interval": "1d",
          "intervals": [
            "auto",
            "1s",
            "1m",
            "5m",
            "10m",
            "30m",
            "1h",
            "3h",
            "12h",
            "1d",
            "1w",
            "1M",
            "1y"
          ],
          "fill": 0,
          "linewidth": 3,
          "timezone": "browser",
          "spyable": true,
          "zoomlinks": true,
          "bars": true,
          "stack": true,
          "points": false,
          "lines": false,
          "legend": true,
          "x-axis": true,
          "y-axis": true,
          "percentage": false,
          "interactive": true,
          "options": true,
          "tooltip": {
            "value_type": "cumulative",
            "query_as_alias": false
          },
          "title": "Event Counts",
          "lines_smooth": false,
          "show_queries": true,
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "sum_value": false
        },
        {
          "error": false,
          "span": 6,
          "editable": true,
          "spyable": true,
          "group": [
            "default"
          ],
          "type": "filtering",
          "title": "Filters"
        }
      ]
    },
    {
      "title": "Top 10",
      "height": "240px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "span": 6,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=query_s&facet.limit=10&facet.missing=true&f.query_s.facet.sort=count&fq=-{!term f=query_s}*:*",
            "custom": "&fq=-{!term f=query_s}*:*"
          },
          "mode": "count",
          "field": "query_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 10,
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "bar",
          "counter_pos": "above",
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "Top 10 Queries",
          "sortBy": "count",
          "exportSize": 10000
        },
        {
          "span": 6,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=params.lw_head_field_s&facet.limit=10&facet.missing=true&f.params.lw_head_field_s.facet.sort=count",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_head_field_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 10,
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "bar",
          "counter_pos": "above",
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "Top 10 Clicked Doc",
          "sortBy": "count",
          "exportSize": 10000
        }
      ]
    },
    {
      "title": "Table",
      "height": "150px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "span": 12,
          "editable": true,
          "type": "table",
          "loadingEditor": false,
          "status": "Stable",
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&sort=timestamp_tdt desc&wt=json&rows=50",
            "basic_query": "q=*%3A*&fq=-type_s:rule_*&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&sort=timestamp_tdt desc",
            "custom": ""
          },
          "size": 25,
          "pages": 2,
          "offset": 0,
          "sort": [
            "timestamp_tdt",
            "desc"
          ],
          "group": "default",
          "style": {
            "font-size": "9pt"
          },
          "overflow": "min-height",
          "fields": [
            "timestamp_tdt",
            "query_s",
            "params.lw_head_field_s",
            "params.lw_user_s",
            "params.lw_ip_address_s",
            "params.lw_city_s",
            "params.lw_state_s"
          ],
          "important_fields": [
            "_version_",
            "count_i",
            "doc_id_s",
            "flag_s",
            "id",
            "params.lw_browser_s",
            "params.lw_browser_timestamp_s",
            "params.lw_city_s",
            "params.lw_coord_s",
            "params.lw_country_s",
            "params.lw_head_field_s",
            "params.lw_head_field_t",
            "params.lw_ip_address_s",
            "params.lw_language_s",
            "params.lw_state_s",
            "params.lw_thumbnail_url_s",
            "params.lw_url_s",
            "params.lw_userAgent_s",
            "params.lw_user_device_s",
            "params.lw_user_s",
            "params.lw_zip_code_s",
            "params.source_s",
            "params.source_type_s",
            "query_orig_s",
            "query_s",
            "query_t",
            "timestamp_tdt",
            "type_s",
            "tz_timestamp_txt"
          ],
          "highlight": [],
          "sortable": true,
          "header": true,
          "paging": true,
          "field_list": false,
          "trimFactor": 300,
          "normTimes": true,
          "spyable": true,
          "saveOption": "json",
          "exportSize": 50,
          "exportAll": true,
          "displayLinkIcon": true,
          "imageFields": [],
          "imgFieldWidth": "auto",
          "imgFieldHeight": "85px",
          "show_queries": true,
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "Table",
          "enableHyperlink": false,
          "hyperlinkColumnHeader": "url",
          "hyperlinkColumnForURI": "params.lw_url_s",
          "maxNumCalcTopFields": 20,
          "calcTopFieldValuesFromAllData": false
        }
      ]
    },
    {
      "title": "Geo",
      "height": "300px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "span": 4,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=params.lw_country_s&facet.limit=10&facet.missing=true&f.params.lw_country_s.facet.sort=count",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_country_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 10,
          "sortBy": "count",
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "bar",
          "counter_pos": "above",
          "exportSize": 10000,
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "Country"
        },
        {
          "span": 4,
          "editable": true,
          "type": "map",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&rows=0&facet=true&facet.field=params.lw_state_s&facet.limit=100",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_state_s",
          "stats_field": "",
          "decimal_points": 0,
          "map": "usa",
          "useNames": false,
          "colors": [
            "#A0E2E2",
            "#265656"
          ],
          "size": 100,
          "exclude": [],
          "spyable": true,
          "index_limit": 0,
          "show_queries": true,
          "title": "State"
        },
        {
          "span": 4,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=params.lw_user_s&facet.limit=10&facet.missing=true&f.params.lw_user_s.facet.sort=count",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_user_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 10,
          "sortBy": "count",
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "bar",
          "counter_pos": "above",
          "exportSize": 10000,
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "Users"
        }
      ]
    },
    {
      "title": "User Info",
      "height": "240px",
      "editable": true,
      "collapse": false,
      "collapsable": true,
      "panels": [
        {
          "span": 4,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=params.lw_user_device_s&facet.limit=10&facet.missing=true&f.params.lw_user_device_s.facet.sort=count",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_user_device_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 10,
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "pie",
          "counter_pos": "above",
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "User Device",
          "sortBy": "count",
          "exportSize": 10000
        },
        {
          "span": 4,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=params.lw_browser_s&facet.limit=10&facet.missing=true&f.params.lw_browser_s.facet.sort=count",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_browser_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 10,
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "bar",
          "counter_pos": "above",
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "User Browser",
          "sortBy": "count",
          "exportSize": 10000
        },
        {
          "span": 4,
          "editable": true,
          "type": "terms",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&facet=true&facet.field=params.lw_ip_address_s&facet.limit=20&facet.missing=true&f.params.lw_ip_address_s.facet.sort=count",
            "custom": ""
          },
          "mode": "count",
          "field": "params.lw_ip_address_s",
          "stats_field": "",
          "decimal_points": 0,
          "exclude": [],
          "missing": false,
          "other": false,
          "size": 20,
          "order": "descending",
          "style": {
            "font-size": "10pt"
          },
          "donut": false,
          "tilt": false,
          "labels": true,
          "logAxis": false,
          "arrangement": "horizontal",
          "chart": "bar",
          "counter_pos": "above",
          "lastColor": "",
          "spyable": true,
          "show_queries": true,
          "chartColors": [
            "#7EB26D",
            "#EAB839",
            "#6ED0E0",
            "#EF843C",
            "#E24D42",
            "#1F78C1",
            "#BA43A9",
            "#705DA0",
            "#508642",
            "#CCA300",
            "#447EBC",
            "#C15C17",
            "#890F02",
            "#0A437C",
            "#6D1F62",
            "#584477",
            "#B7DBAB",
            "#F4D598",
            "#70DBED",
            "#F9BA8F",
            "#F29191",
            "#82B5D8",
            "#E5A8E2",
            "#AEA2E0",
            "#629E51",
            "#E5AC0E",
            "#64B0C8",
            "#E0752D",
            "#BF1B00",
            "#0A50A1",
            "#962D82",
            "#614D93",
            "#9AC48A",
            "#F2C96D",
            "#65C5DB",
            "#F9934E",
            "#EA6460",
            "#5195CE",
            "#D683CE",
            "#806EB7",
            "#3F6833",
            "#967302",
            "#2F575E",
            "#99440A",
            "#58140C",
            "#052B51",
            "#511749",
            "#3F2B5B",
            "#E0F9D7",
            "#FCEACA",
            "#CFFAFF",
            "#F9E2D2",
            "#FCE2DE",
            "#BADFF4",
            "#F9D9F9",
            "#DEDAF7"
          ],
          "refresh": {
            "enable": false,
            "interval": 2
          },
          "title": "User IP Address",
          "sortBy": "count",
          "exportSize": 10000
        }
      ]
    },
    {
      "title": "Map",
      "height": "500px",
      "editable": true,
      "collapse": true,
      "collapsable": true,
      "panels": [
        {
          "span": 12,
          "editable": true,
          "type": "bettermap",
          "loadingEditor": false,
          "queries": {
            "mode": "all",
            "ids": [
              0
            ],
            "query": "q=*%3A*&fq=-type_s:rule_*&wt=json&rows=1000&fq=timestamp_tdt:[NOW/YEAR-1YEAR%20TO%20NOW/YEAR%2B1YEAR]&fq=params.lw_coord_s:[31.205,-124.85174 TO 48.473651,-63.397229]&sort=timestamp_tdt desc",
            "custom": "&fq=params.lw_coord_s:*"
          },
          "size": 1000,
          "spyable": true,
          "lat_start": 31.205,
          "lat_end": 48.473651,
          "lon_start": -124.85174,
          "lon_end": -63.397229,
          "field": "params.lw_coord_s",
          "show_queries": true,
          "title": "Map",
          "tooltip": "",
          "fitBoundsAuto": true,
          "lat_empty": 0,
          "lon_empty": 0
        }
      ]
    }
  ],
  "editable": true,
  "index": {
    "interval": "none",
    "pattern": "[logstash-]YYYY.MM.DD",
    "default": "_all"
  },
  "style": "light",
  "failover": false,
  "panel_hints": true,
  "loader": {
    "save_gist": false,
    "save_elasticsearch": true,
    "save_local": true,
    "save_default": true,
    "save_temp": true,
    "save_temp_ttl_enable": true,
    "save_temp_ttl": "30d",
    "load_gist": true,
    "load_elasticsearch": true,
    "load_elasticsearch_size": 20,
    "load_local": true,
    "hide": false,
    "dropdown_collections": true,
    "save_as_public": true
  },
  "solr": {
    "server": "/api/apollo/solr/",
    "core_name": "BestBuy_signals",
    "core_list": [
      "BestBuy_rules",
      "UserPrefs_signals",
      "KM_signals_aggr",
      "default_signals",
      "EnterpriseSearch2_signals_aggr",
      "UserPrefs_signals_aggr",
      "system_metrics",
      "system_blobs",
      "EnterpriseSearch_signals",
      "POI_signals",
      "default_syn_c3lub255bXMudHh0",
      "logs",
      "EnterpriseSearch",
      "citibikerides_signals",
      "EnterpriseSearch_signals_aggr",
      "citibikerides_logs",
      "POI_signals_aggr",
      "KM_logs",
      "POI",
      "default_signals_aggr",
      "EnterpriseSearch2_signals",
      "Doctors",
      "BestBuy_signals_aggr",
      "EnterpriseSearch2_logs",
      "BestBuy_signals",
      "BestBuy_syn_c3lub255bXMudHh0",
      "UserPrefs_logs",
      "EnterpriseSearch_syn_c3lub255bXMudHh0",
      "EnterpriseSearch2",
      "system_messages",
      "recommender_models",
      "citibikerides_signals_aggr",
      "audit_logs",
      "Doctors_signals_aggr",
      "POI_logs",
      "KM_signals",
      "default",
      "default_logs",
      "BestBuy_logs",
      "system_jobs_history",
      "BestBuy",
      "citibikerides",
      "UserPrefs",
      "Doctors_signals",
      "KM",
      "EnterpriseSearch_stored_parameters",
      "Doctors_logs",
      "system_history",
      "BestBuy_stored_parameters",
      "EnterpriseSearch_logs"
    ],
    "global_params": "&fq=-type_s:rule_*"
  },
  "username": "admin"
}