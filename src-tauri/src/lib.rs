// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .setup(|app| {
            use tauri::Manager;
            let window = app.get_webview_window("main").unwrap();

            let monitor = window.current_monitor()?.unwrap();
            let screen_size = monitor.size();
            let window_size = window.outer_size()?;

            let x = (screen_size.width as i32 - window_size.width as i32) / 2;
            let y = screen_size.height as i32 - window_size.height as i32 - 40;

            window.set_position(tauri::Position::Physical(tauri::PhysicalPosition { x, y }))?;
            
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
