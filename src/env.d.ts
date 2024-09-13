/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
    readonly APU_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }