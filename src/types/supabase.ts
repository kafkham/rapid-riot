/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/festivals": {
    get: {
      parameters: {
        query: {
          title?: parameters["rowFilter.festivals.title"];
          link?: parameters["rowFilter.festivals.link"];
          lat?: parameters["rowFilter.festivals.lat"];
          lng?: parameters["rowFilter.festivals.lng"];
          country?: parameters["rowFilter.festivals.country"];
          state?: parameters["rowFilter.festivals.state"];
          city?: parameters["rowFilter.festivals.city"];
          id?: parameters["rowFilter.festivals.id"];
          /** row has been approved by moderator */
          approved?: parameters["rowFilter.festivals.approved"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["festivals"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** festivals */
          festivals?: definitions["festivals"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          title?: parameters["rowFilter.festivals.title"];
          link?: parameters["rowFilter.festivals.link"];
          lat?: parameters["rowFilter.festivals.lat"];
          lng?: parameters["rowFilter.festivals.lng"];
          country?: parameters["rowFilter.festivals.country"];
          state?: parameters["rowFilter.festivals.state"];
          city?: parameters["rowFilter.festivals.city"];
          id?: parameters["rowFilter.festivals.id"];
          /** row has been approved by moderator */
          approved?: parameters["rowFilter.festivals.approved"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          title?: parameters["rowFilter.festivals.title"];
          link?: parameters["rowFilter.festivals.link"];
          lat?: parameters["rowFilter.festivals.lat"];
          lng?: parameters["rowFilter.festivals.lng"];
          country?: parameters["rowFilter.festivals.country"];
          state?: parameters["rowFilter.festivals.state"];
          city?: parameters["rowFilter.festivals.city"];
          id?: parameters["rowFilter.festivals.id"];
          /** row has been approved by moderator */
          approved?: parameters["rowFilter.festivals.approved"];
        };
        body: {
          /** festivals */
          festivals?: definitions["festivals"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/new_festivals": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.new_festivals.id"];
          created_at?: parameters["rowFilter.new_festivals.created_at"];
          title?: parameters["rowFilter.new_festivals.title"];
          link?: parameters["rowFilter.new_festivals.link"];
          country?: parameters["rowFilter.new_festivals.country"];
          state?: parameters["rowFilter.new_festivals.state"];
          city?: parameters["rowFilter.new_festivals.city"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["new_festivals"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** new_festivals */
          new_festivals?: definitions["new_festivals"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.new_festivals.id"];
          created_at?: parameters["rowFilter.new_festivals.created_at"];
          title?: parameters["rowFilter.new_festivals.title"];
          link?: parameters["rowFilter.new_festivals.link"];
          country?: parameters["rowFilter.new_festivals.country"];
          state?: parameters["rowFilter.new_festivals.state"];
          city?: parameters["rowFilter.new_festivals.city"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.new_festivals.id"];
          created_at?: parameters["rowFilter.new_festivals.created_at"];
          title?: parameters["rowFilter.new_festivals.title"];
          link?: parameters["rowFilter.new_festivals.link"];
          country?: parameters["rowFilter.new_festivals.country"];
          state?: parameters["rowFilter.new_festivals.state"];
          city?: parameters["rowFilter.new_festivals.city"];
        };
        body: {
          /** new_festivals */
          new_festivals?: definitions["new_festivals"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/new_reports": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.new_reports.id"];
          created_at?: parameters["rowFilter.new_reports.created_at"];
          report?: parameters["rowFilter.new_reports.report"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["new_reports"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** new_reports */
          new_reports?: definitions["new_reports"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.new_reports.id"];
          created_at?: parameters["rowFilter.new_reports.created_at"];
          report?: parameters["rowFilter.new_reports.report"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.new_reports.id"];
          created_at?: parameters["rowFilter.new_reports.created_at"];
          report?: parameters["rowFilter.new_reports.report"];
        };
        body: {
          /** new_reports */
          new_reports?: definitions["new_reports"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  /** @description river festivals */
  festivals: {
    /** Format: text */
    title: string;
    /** Format: text */
    link: string;
    /** Format: double precision */
    lat: number;
    /** Format: double precision */
    lng: number;
    /** Format: text */
    country: string;
    /** Format: text */
    state: string;
    /** Format: text */
    city: string;
    /**
     * Format: smallint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: boolean
     * @description row has been approved by moderator
     * @default false
     */
    approved: boolean;
  };
  /** @description user submissions for new festivals */
  new_festivals: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: text
     * @default
     */
    title: string;
    /** Format: text */
    link: string;
    /** Format: text */
    country: string;
    /** Format: text */
    state: string;
    /** Format: text */
    city: string;
  };
  new_reports: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /** Format: text */
    report: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description festivals */
  "body.festivals": definitions["festivals"];
  /** Format: text */
  "rowFilter.festivals.title": string;
  /** Format: text */
  "rowFilter.festivals.link": string;
  /** Format: double precision */
  "rowFilter.festivals.lat": string;
  /** Format: double precision */
  "rowFilter.festivals.lng": string;
  /** Format: text */
  "rowFilter.festivals.country": string;
  /** Format: text */
  "rowFilter.festivals.state": string;
  /** Format: text */
  "rowFilter.festivals.city": string;
  /** Format: smallint */
  "rowFilter.festivals.id": string;
  /**
   * Format: boolean
   * @description row has been approved by moderator
   */
  "rowFilter.festivals.approved": string;
  /** @description new_festivals */
  "body.new_festivals": definitions["new_festivals"];
  /** Format: bigint */
  "rowFilter.new_festivals.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.new_festivals.created_at": string;
  /** Format: text */
  "rowFilter.new_festivals.title": string;
  /** Format: text */
  "rowFilter.new_festivals.link": string;
  /** Format: text */
  "rowFilter.new_festivals.country": string;
  /** Format: text */
  "rowFilter.new_festivals.state": string;
  /** Format: text */
  "rowFilter.new_festivals.city": string;
  /** @description new_reports */
  "body.new_reports": definitions["new_reports"];
  /** Format: bigint */
  "rowFilter.new_reports.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.new_reports.created_at": string;
  /** Format: text */
  "rowFilter.new_reports.report": string;
}
