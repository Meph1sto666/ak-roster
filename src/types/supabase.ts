export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      depot: {
        Row: {
          id: string
          material_id: string
          stock: number
          username: string
        }
        Insert: {
          id?: string
          material_id: string
          stock: number
          username: string
        }
        Update: {
          id?: string
          material_id?: string
          stock?: number
          username?: string
        }
      }
      goals: {
        Row: {
          elite: number | null
          group: number
          level: number | null
          masteries: number[] | null
          modules: number[] | null
          op_id: string
          pid: string
          rank: number | null
        }
        Insert: {
          elite?: number | null
          group: number
          level?: number | null
          masteries?: number[] | null
          modules?: number[] | null
          op_id: string
          pid: string
          rank?: number | null
        }
        Update: {
          elite?: number | null
          group?: number
          level?: number | null
          masteries?: number[] | null
          modules?: number[] | null
          op_id?: string
          pid?: string
          rank?: number | null
        }
      }
      operators: {
        Row: {
          elite: number
          favorite: boolean
          level: number
          masteries: number[]
          modules: number[]
          op_id: string
          owned: boolean
          pid: string
          potential: number
          rank: number
          skin: string | null
        }
        Insert: {
          elite?: number
          favorite?: boolean
          level?: number
          masteries?: number[]
          modules?: number[]
          op_id: string
          owned?: boolean
          pid: string
          potential?: number
          rank?: number
          skin?: string | null
        }
        Update: {
          elite?: number
          favorite?: boolean
          level?: number
          masteries?: number[]
          modules?: number[]
          op_id?: string
          owned?: boolean
          pid?: string
          potential?: number
          rank?: number
          skin?: string | null
        }
      }
      presets: {
        Row: {
          elite: number | null
          id: string
          level: number | null
          masteries: number[] | null
          modules: number[] | null
          name: string
          pid: string
          potential: number | null
          rank: number | null
        }
        Insert: {
          elite?: number | null
          id: string
          level?: number | null
          masteries?: number[] | null
          modules?: number[] | null
          name?: string
          pid: string
          potential?: number | null
          rank?: number | null
        }
        Update: {
          elite?: number | null
          id?: string
          level?: number | null
          masteries?: number[] | null
          modules?: number[] | null
          name?: string
          pid?: string
          potential?: number | null
          rank?: number | null
        }
      }
      profiles: {
        Row: {
          assistant: string | null
          displayName: string
          friendCode: Json | null
          lastModified: string | null
          level: number | null
          onboard: string | null
          pid: string
          server: string | null
          uid: string
          username: string
        }
        Insert: {
          assistant?: string | null
          displayName: string
          friendCode?: Json | null
          lastModified?: string | null
          level?: number | null
          onboard?: string | null
          pid?: string
          server?: string | null
          uid: string
          username: string
        }
        Update: {
          assistant?: string | null
          displayName?: string
          friendCode?: Json | null
          lastModified?: string | null
          level?: number | null
          onboard?: string | null
          pid?: string
          server?: string | null
          uid?: string
          username?: string
        }
      }
      supports: {
        Row: {
          module: number | null
          op_id: string
          pid: string
          skill: number
          slot: number
        }
        Insert: {
          module?: number | null
          op_id: string
          pid: string
          skill?: number
          slot: number
        }
        Update: {
          module?: number | null
          op_id?: string
          pid?: string
          skill?: number
          slot?: number
        }
      }
      users: {
        Row: {
          discordCode: Json | null
          lastModified: string
          private: boolean
          redditUser: string | null
          uid: string
        }
        Insert: {
          discordCode?: Json | null
          lastModified?: string
          private?: boolean
          redditUser?: string | null
          uid: string
        }
        Update: {
          discordCode?: Json | null
          lastModified?: string
          private?: boolean
          redditUser?: string | null
          uid?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
