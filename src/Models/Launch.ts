    export interface Core {
        core_serial: string;
        flight: number;
        block: number;
        reused: boolean;
        land_success?: any;
        landing_type?: any;
        landing_vehicle?: any;
    }

    export interface FirstStage {
        cores: Core[];
    }

    export interface Payload {
        payload_id: string;
        reused: boolean;
        customers: string[];
        payload_type: string;
        payload_mass_kg: number;
        payload_mass_lbs: number;
        orbit: string;
    }

    export interface SecondStage {
        payloads: Payload[];
    }

    export interface Rocket {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: FirstStage;
        second_stage: SecondStage;
    }

    export interface Telemetry {
        flight_club: string;
    }

    export interface Reuse {
        core: boolean;
        side_core1: boolean;
        side_core2: boolean;
        fairings: boolean;
        capsule: boolean;
    }

    export interface LaunchSite {
        site_id: string;
        site_name: string;
        site_name_long: string;
    }

    export interface Links {
        mission_patch: string;
        mission_patch_small: string;
        reddit_campaign: string;
        reddit_launch: string;
        reddit_recovery?: any;
        reddit_media: string;
        presskit: string;
        article_link: string;
        wikipedia: string;
        video_link: string;
    }

    export interface Launch {
        flight_number: number;
        mission_name: string;
        launch_year: string;
        launch_date_unix: number;
        launch_date_utc: Date;
        launch_date_local: Date;
        rocket: Rocket;
        telemetry: Telemetry;
        reuse: Reuse;
        launch_site: LaunchSite;
        launch_success: boolean;
        links: Links;
        details: string;
    }
    export interface Headquarters {
        address: string;
        city: string;
        state : string;
    }

    export interface CompanyInfo {
        name: string;
        founder: string;
        employees: number;
        vehicles: number;
        launch_sites: number;
        test_sites: number;
        ceo: string;
        cto: string;
        coo: string;
        cto_propulsion: string;
        valuation: number;
        headquarters : Headquarters;
        summary: string;
    }

    export interface LaunchPad {
        id: string;
        full_name: string;
        status: string;
        location: Location;
        vehicles_launched: string[];
        details: string;
    }

    export interface Location {
        name: string;
        region : string;
        latitude: number;
        longitude: number;
    }
