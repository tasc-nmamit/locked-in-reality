<script lang='ts'>
	import { onMount } from "svelte";

    onMount(()=>{
        function handleKeyPress(event:any){
            event.preventDefault();
            if (event.key === "Escape"){
                window.location.href = "serverRoom"
            }
        }

        // Add the event listener
		document.addEventListener('keydown', handleKeyPress);

        // Clean up by removing the event listener when the component is unmounted
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    })
</script>

<main class="bg-black">
<pre>
2024-01-20 19:22:28; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:22:28; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=10, lpEventData=0000000000000000
2024-01-20 19:22:28; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 4728] /------------Service start to initialize, version: 5.6.5.0, product line: 1------------/
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 4728] RegCreateForceRestart result: 1
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 7220] Bind stream socket in port 13010
2024-01-20 19:22:29; WARNING; Service Manager; 4956; 4728] WTSQueryUserToken Failed: 0
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 4728] SessionId = -1, RdpId
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ServiceCore.dll
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ServiceCore.dll Interfce Version: 5.1
2024-01-20 19:22:29; INFO; AEF Core; 4956; 4728] Before Library AEF Core v5.6.10.0 join
2024-01-20 19:22:29; INFO; AEF Core; 4956; 4728] Library AEF Core join to ush, result = 0x80004005
2024-01-20 19:22:29; INFO; AEF Core; 4956; 4728] (337)Loaded AEF Core v5.6.10.0 successfully in service
2024-01-20 19:22:29; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ServiceTcpStream.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ServiceTcpStream.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; Loopback Stream; 4956; 4728] Before Library Loopback Stream v5.6.5.0 join
2024-01-20 19:22:30; INFO; Loopback Stream; 4956; 4728] Library Loopback Stream join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; Loopback Stream; 4956; 4728] (27)Loaded Loopback Stream v5.6.5.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ACStorePlugin\ACStorePlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ACStorePlugin\ACStorePlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; ACStore Plugin; 4956; 4728] Before Library ACStore Plugin v5.4.4.8 join
2024-01-20 19:22:30; INFO; ACStore Plugin; 4956; 4728] Library ACStore Plugin join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; ACStore Plugin; 4956; 4728] (55)Loaded ACStore Plugin v5.4.4.8 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\AC_FDSPlugin\AC_FDSPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\AC_FDSPlugin\AC_FDSPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; AC_FDSPlugIn; 4956; 4728] Before Library AC_FDSPlugIn v5.6.1.0 join
2024-01-20 19:22:30; INFO; AC_FDSPlugIn; 4956; 4728] Library AC_FDSPlugIn join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; AC_FDSPlugIn; 4956; 4728] (37)Loaded AC_FDSPlugIn v5.6.1.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\AuraPlugIn\AuraPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\AuraPlugIn\AuraPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; Aura Pluing; 4956; 4728] Before Library Aura Pluing v5.6.9.0 join
2024-01-20 19:22:30; INFO; Aura Pluing; 4956; 4728] Library Aura Pluing join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; Aura Pluing; 4956; 4728] (73)Loaded Aura Pluing v5.6.9.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\CustomHotkeyPlugin\CustomHotkeyPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\CustomHotkeyPlugin\CustomHotkeyPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; Customizable Hotkey Plugin; 4956; 4728] Before Library Customizable Hotkey Plugin v5.4.8.0 join
2024-01-20 19:22:30; INFO; Customizable Hotkey Plugin; 4956; 4728] EC Device open failed.
2024-01-20 19:22:30; ERROR; Customizable Hotkey Plugin; 4956; 4728] Library Customizable Hotkey Plugin v5.4.8.0 join failed, error = 0x80004005
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\DenoiseAIPlugin\DenoiseAIPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\DenoiseAIPlugin\DenoiseAIPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; DenoiseAI Pluing; 4956; 4728] Before Library DenoiseAI Pluing v5.4.8.5 join
2024-01-20 19:22:30; INFO; DenoiseAI Pluing; 4956; 4728] Library DenoiseAI Pluing join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; DenoiseAI Pluing; 4956; 4728] (22)Loaded DenoiseAI Pluing v5.4.8.5 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\DeviceServicePlugIn\DeviceServicePlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\DeviceServicePlugIn\DeviceServicePlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; DeviceServicePlugin; 4956; 4728] Before Library DeviceServicePlugin v5.6.1.2 join
2024-01-20 19:22:30; INFO; DeviceServicePlugin; 4956; 4728] Library DeviceServicePlugin join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; DeviceServicePlugin; 4956; 4728] (25)Loaded DeviceServicePlugin v5.6.1.2 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\DeviceServicePlugIn\DeviceServicePlugin\DeviceServicePlugin.dll
2024-01-20 19:22:30; ERROR; Service Manager; 4956; 4728] Failed for file is not exist to load C:\Program Files\ASUS\ARMOURY CRATE Service\DeviceServicePlugIn\DeviceServicePlugin\DeviceServicePlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\FreeUpMemoryPlugin\FreeUpMemoryPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\FreeUpMemoryPlugin\FreeUpMemoryPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; Free Up Memory Plugin; 4956; 4728] Before Library Free Up Memory Plugin v5.6.5.0 join
2024-01-20 19:22:30; INFO; Free Up Memory Plugin; 4956; 4728] Library Free Up Memory Plugin join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; Free Up Memory Plugin; 4956; 4728] (187)Loaded Free Up Memory Plugin v5.6.5.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GameBoxPlugIn\GameBoxPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GameBoxPlugIn\GameBoxPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; GameBoxPlugIn; 4956; 4728] Before Library GameBoxPlugIn v5.6.5.0 join
2024-01-20 19:22:30; INFO; GameBoxPlugIn; 4956; 4728] Library GameBoxPlugIn join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; GameBoxPlugIn; 4956; 4728] (362)Loaded GameBoxPlugIn v5.6.5.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GameLibraryPlugIn\GameLibraryPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GameLibraryPlugIn\GameLibraryPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; GameLibrary Pluing; 4956; 4728] Before Library GameLibrary Pluing v5.6.4.0 join
2024-01-20 19:22:30; INFO; GameLibrary Pluing; 4956; 4728] Library GameLibrary Pluing join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; GameLibrary Pluing; 4956; 4728] (22)Loaded GameLibrary Pluing v5.6.4.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GameLibraryPlugIn\GameLauncher.exe
2024-01-20 19:22:30; ERROR; Service Manager; 4956; 4728] Failed for file is not dll to load C:\Program Files\ASUS\ARMOURY CRATE Service\GameLibraryPlugIn\GameLauncher.exe
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GameVisualPlugin\GameVisualPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GameVisualPlugin\GameVisualPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; GameVisual Plugin; 4956; 4728] Before Library GameVisual Plugin v5.6.9.0 join
2024-01-20 19:22:30; INFO; GameVisual Plugin; 4956; 4728] Library GameVisual Plugin join to ush, result = 0x80004005
2024-01-20 19:22:30; INFO; GameVisual Plugin; 4956; 4728] (31)Loaded GameVisual Plugin v5.6.9.0 successfully in service
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GPUPowerSavingPlugin\GPUPowerSavingPlugin.dll
2024-01-20 19:22:30; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GPUPowerSavingPlugin\GPUPowerSavingPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:30; INFO; GPU Power Saving Plugin ; 4956; 4728] Before Library GPU Power Saving Plugin  v5.6.8.2 join
2024-01-20 19:22:32; INFO; GPU Power Saving Plugin ; 4956; 4728] m_bFindIntel_iGPU=1 , m_bFindNV=1 , m_bFindAMD_iGPU=0 , m_bFindRadeon=0 , m_bFindIntelARC=0 , m_nDiscreteCardTtl=1
2024-01-20 19:22:32; INFO; GPU Power Saving Plugin ; 4956; 4728] After Check Graphic and support it
2024-01-20 19:22:32; INFO; GPU Power Saving Plugin ; 4956; 4728] bSupport = 1
2024-01-20 19:22:32; INFO; GPU Power Saving Plugin ; 4956; 4728] Library GPU Power Saving Plugin  join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; GPU Power Saving Plugin ; 4956; 4728] (1145)Loaded GPU Power Saving Plugin  v5.6.8.2 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GPUSwitchPlugin\GPUSwitchPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GPUSwitchPlugin\GPUSwitchPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; GPUSwitch Plugin ; 4956; 4728] Before Library GPUSwitch Plugin  v5.6.4.0 join
2024-01-20 19:22:32; ERROR; GPUSwitch Plugin ; 4956; 4728] Library GPUSwitch Plugin  v5.6.4.0 join failed, error = 0x80004005
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GPUSwitchPlugin\NormalSwitchPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GPUSwitchPlugin\NormalSwitchPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; NormalSwitch Plugin ; 4956; 4728] Before Library NormalSwitch Plugin  v5.6.4.0 join
2024-01-20 19:22:32; INFO; NormalSwitch Plugin ; 4956; 4728] Library NormalSwitch Plugin  join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; NormalSwitch Plugin ; 4956; 4728] (270)Loaded NormalSwitch Plugin  v5.6.4.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\GridPlugin\GridPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\GridPlugin\GridPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; GridPlugin; 4956; 4728] Before Library GridPlugin v5.6.9.0 join
2024-01-20 19:22:32; WARNING; GridPlugin; 4956; 4728] [Join] winreg::RegKey TryOpen IsOk
2024-01-20 19:22:32; INFO; GridPlugin; 4956; 4728] [Join] GetProcessAccountName: SYSTEM
2024-01-20 19:22:32; INFO; GridPlugin; 4956; 4728] Library GridPlugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; GridPlugin; 4956; 4728] (18)Loaded GridPlugin v5.6.9.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\HWPlugIn\HWPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\HWPlugIn\HWPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; HW Pluing; 4956; 4728] Before Library HW Pluing v5.6.5.0 join
2024-01-20 19:22:32; INFO; HW Pluing; 4956; 4728] Library HW Pluing join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; HW Pluing; 4956; 4728] (21)Loaded HW Pluing v5.6.5.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\MacroKeyPlugin\MacroKeyPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\MacroKeyPlugin\MacroKeyPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; Macro Key Plugin; 4956; 4728] Before Library Macro Key Plugin v5.4.3.0 join
2024-01-20 19:22:32; INFO; Macro Key Plugin; 4956; 4728] Library Macro Key Plugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; Macro Key Plugin; 4956; 4728] (15)Loaded Macro Key Plugin v5.4.3.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\MobilePlugin\MobilePlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\MobilePlugin\MobilePlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; Mobile Plugin; 4956; 4728] Before Library Mobile Plugin v5.6.5.0 join
2024-01-20 19:22:32; INFO; Mobile Plugin; 4956; 4728] Library Mobile Plugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; Mobile Plugin; 4956; 4728] (14)Loaded Mobile Plugin v5.6.5.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\MultiwheelPlugin\MultiwheelPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; Multiwheel Plugin; 4956; 4728] Before Library Multiwheel Plugin v5.2.6.0 join
2024-01-20 19:22:32; INFO; Multiwheel Plugin; 4956; 4728] EC Device open failed.
2024-01-20 19:22:32; ERROR; Multiwheel Plugin; 4956; 4728] Library Multiwheel Plugin v5.2.6.0 join failed, error = 0x80004005
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ScenarioProfilePlugin\ScenarioProfilePlugIn.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ScenarioProfilePlugin\ScenarioProfilePlugIn.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; ScenarioProfilePlugIn; 4956; 4728] Before Library ScenarioProfilePlugIn v5.6.5.0 join
2024-01-20 19:22:32; INFO; ScenarioProfilePlugIn; 4956; 4728] Library ScenarioProfilePlugIn join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; ScenarioProfilePlugIn; 4956; 4728] (68)Loaded ScenarioProfilePlugIn v5.6.5.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ScenarioProfilePlugin\WebSocketClient\WebSocketClient.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ScenarioProfilePlugin\WebSocketClient\WebSocketClient.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; WebSocketClientPlugin; 4956; 4728] Before Library WebSocketClientPlugin v1.5.3.0 join
2024-01-20 19:22:32; INFO; WebSocketClientPlugin; 4956; 4728] Library WebSocketClientPlugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; WebSocketClientPlugin; 4956; 4728] (26)Loaded WebSocketClientPlugin v1.5.3.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\SoulKeyServicePlugin\SoulKeyServicePlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\SoulKeyServicePlugin\SoulKeyServicePlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; SoulKey Plugin; 4956; 4728] Before Library SoulKey Plugin v5.6.0.1 join
2024-01-20 19:22:32; INFO; SoulKey Plugin; 4956; 4728] Library SoulKey Plugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; SoulKey Plugin; 4956; 4728] (12)Loaded SoulKey Plugin v5.6.0.1 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ThrottlePlugin\ThrottlePlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ThrottlePlugin\ThrottlePlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; Throttle Plugin; 4956; 4728] Before Library Throttle Plugin v5.6.9.0 join
2024-01-20 19:22:32; INFO; Throttle Plugin; 4956; 4728] Library Throttle Plugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; Throttle Plugin; 4956; 4728] (30)Loaded Throttle Plugin v5.6.9.0 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ThrottlePlugin\MonitorPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ThrottlePlugin\MonitorPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; INFO; Monitor Plugin; 4956; 4728] Before Library Monitor Plugin v5.6.9.1 join
2024-01-20 19:22:32; INFO; Monitor Plugin; 4956; 4728] Library Monitor Plugin join to ush, result = 0x80004005
2024-01-20 19:22:32; INFO; Monitor Plugin; 4956; 4728] (13)Loaded Monitor Plugin v5.6.9.1 successfully in service
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\ThrottlePlugin\FanControlPlugin.dll
2024-01-20 19:22:32; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\ThrottlePlugin\FanControlPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:32; ERROR; Fan Control Plugin; 4956; 4728] Unmatched ProductLine: 32
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\UserCenterPlugin\UserCenterPlugin.dll
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\UserCenterPlugin\UserCenterPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:33; INFO; UserCenterPlugin; 4956; 4728] Before Library UserCenterPlugin v5.2.4.0 join
2024-01-20 19:22:33; INFO; UserCenterPlugin; 4956; 4728] Library UserCenterPlugin join to ush, result = 0x80004005
2024-01-20 19:22:33; INFO; UserCenterPlugin; 4956; 4728] (10)Loaded UserCenterPlugin v5.2.4.0 successfully in service
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\UserExperienceImprovementPlugin\UserExperienceImprovementPlugin.dll
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\UserExperienceImprovementPlugin\UserExperienceImprovementPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:33; INFO; User Experience Improvement Plugin; 4956; 4728] Before Library User Experience Improvement Plugin v5.6.5.0 join
2024-01-20 19:22:33; INFO; User Experience Improvement Plugin; 4956; 4728] Library User Experience Improvement Plugin join to ush, result = 0x80004005
2024-01-20 19:22:33; INFO; User Experience Improvement Plugin; 4956; 4728] (109)Loaded User Experience Improvement Plugin v5.6.5.0 successfully in service
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\UtilityPlugin\UtilityPlugin.dll
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\UtilityPlugin\UtilityPlugin.dll Interfce Version: 5.1
2024-01-20 19:22:33; INFO; Utility Plugin; 4956; 4728] Before Library Utility Plugin v5.6.8.3 join
2024-01-20 19:22:33; INFO; Utility Plugin; 4956; 4728] Library Utility Plugin join to ush, result = 0x80004005
2024-01-20 19:22:33; INFO; Utility Plugin; 4956; 4728] (16)Loaded Utility Plugin v5.6.8.3 successfully in service
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\VirtualDrivePlugIn\VirtualDrivePlugin.dll
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] C:\Program Files\ASUS\ARMOURY CRATE Service\VirtualDrivePlugIn\VirtualDrivePlugin.dll Interfce Version: 5.1
2024-01-20 19:22:33; INFO; Virtual Drive Plugin; 4956; 4728] Before Library Virtual Drive Plugin v5.1.2.0 join
2024-01-20 19:22:33; INFO; Virtual Drive Plugin; 4956; 4728] Library Virtual Drive Plugin join to ush, result = 0x80004005
2024-01-20 19:22:33; INFO; Virtual Drive Plugin; 4956; 4728] (48)Loaded Virtual Drive Plugin v5.1.2.0 successfully in service
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] Ready from config to load C:\Program Files\ASUS\ARMOURY CRATE Service\VirtualDrivePlugIn\VirtualDrivePlugin\VirtualDrivePlugin.dll
2024-01-20 19:22:33; ERROR; Service Manager; 4956; 4728] Failed for file is not exist to load C:\Program Files\ASUS\ARMOURY CRATE Service\VirtualDrivePlugIn\VirtualDrivePlugin\VirtualDrivePlugin.dll
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Start Registering
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] NotifyUserSession Start Registering Result: 0x80004005
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: AEF Core, RunningThread 0000000000000958, DependentLibCount 0
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library AEF Core OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of Free Up Memory Plugin: Count 1, LibraryIDs 000001735E1E0DF4
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Loopback Stream, RunningThread 00000000000009EC, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Free Up Memory Plugin, RunningThread 00000000000009F4, DependentLibCount 2
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Free Up Memory Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library Loopback Stream is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Loopback Stream OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of ACStore Plugin: Count 0, LibraryIDs 0000000000000000
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: ACStore Plugin, RunningThread 00000000000009B8, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library ACStore Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Aura Pluing, RunningThread 0000000000000A34, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Aura Pluing OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: AC_FDSPlugIn, RunningThread 0000000000000A3C, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library AC_FDSPlugIn OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Mobile Plugin, RunningThread 0000000000000A54, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Mobile Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: DeviceServicePlugin, RunningThread 0000000000000A64, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library DeviceServicePlugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of GameVisual Plugin: Count 0, LibraryIDs 0000000000000000
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: GameVisual Plugin, RunningThread 0000000000000A74, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library GameVisual Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: GameLibrary Pluing, RunningThread 0000000000000A88, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library GameLibrary Pluing OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of DenoiseAI Pluing: Count 0, LibraryIDs 0000000000000000
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: DenoiseAI Pluing, RunningThread 0000000000000A84, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library DenoiseAI Pluing OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: GameBoxPlugIn, RunningThread 0000000000000AA4, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library GameBoxPlugIn OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of GPU Power Saving Plugin : Count 1, LibraryIDs 000001735EB30CA0
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library Loopback Stream is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: GPU Power Saving Plugin , RunningThread 0000000000000AB4, DependentLibCount 2
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library GPU Power Saving Plugin  OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of NormalSwitch Plugin : Count 1, LibraryIDs 000001735EADEAEC
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library Loopback Stream is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: NormalSwitch Plugin , RunningThread 0000000000000AC8, DependentLibCount 2
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library NormalSwitch Plugin  OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: GridPlugin, RunningThread 0000000000000AC4, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library GridPlugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of HW Pluing: Count 1, LibraryIDs 000001735EFB70C8
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library Loopback Stream is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: HW Pluing, RunningThread 0000000000000AE8, DependentLibCount 2
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library HW Pluing OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Monitor Plugin, RunningThread 0000000000000AF4, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Monitor Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of Macro Key Plugin: Count 0, LibraryIDs 0000000000000000
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Macro Key Plugin, RunningThread 0000000000000B04, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Macro Key Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of ScenarioProfilePlugIn: Count 1, LibraryIDs 000001735F13DFD0
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Dependent Libraries of Throttle Plugin: Count 1, LibraryIDs 000001735F0E6620
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library Loopback Stream is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Throttle Plugin, RunningThread 0000000000000B14, DependentLibCount 2
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: ScenarioProfilePlugIn, RunningThread 0000000000000B28, DependentLibCount 2
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library ScenarioProfilePlugIn OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: WebSocketClientPlugin, RunningThread 0000000000000B34, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library WebSocketClientPlugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: SoulKey Plugin, RunningThread 0000000000000B44, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library SoulKey Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Utility Plugin, RunningThread 0000000000000B58, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Utility Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: User Experience Improvement Plugin, RunningThread 0000000000000B64, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library User Experience Improvement Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library Throttle Plugin is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Throttle Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: UserCenterPlugin, RunningThread 0000000000000B74, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library UserCenterPlugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Library AEF Core is running
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] StartRunningRecursively, Name: Virtual Drive Plugin, RunningThread 0000000000000B84, DependentLibCount 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] ---Started to run library Virtual Drive Plugin OK---
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2980] Before Library AEF Core initialize
2024-01-20 19:22:33; INFO; AEF Core; 4956; 2980] Core Attributes:([ModelName]:FX506LH) ([ProductLine]:1) ([SerialNumber]:N2NRCX125053085) ([SubBrand]:2) ([SubBrandStyle]:0) ([SystemDeviceUUID]:0b2d660c-1646-4ecd-9996-294e29c9ad8e) ([SystemFamilyName]:ASUS TUF Gaming F15) 
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2980] (72)Library AEF Core initialize OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 2980] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 6648] Before Library SoulKey Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7160] Before Library Utility Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7144] Before Library Virtual Drive Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7112] Before Library UserCenterPlugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7156] Before Library User Experience Improvement Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 9108] Before Library WebSocketClientPlugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 6668] Before Library Macro Key Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8684] Before Library Monitor Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8900] Before Library GridPlugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8436] Before Library GameBoxPlugIn into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7964] Before Library GameLibrary Pluing into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8136] Before Library GameVisual Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8324] Before Library AC_FDSPlugIn into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8744] Before Library DenoiseAI Pluing into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8548] Before Library DeviceServicePlugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8336] Before Library Aura Pluing into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2964] Before Library Loopback Stream into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8368] Before Library Mobile Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8700] Before Library ACStore Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7112] (0)UserCenterPlugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 7112] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8368] (0)Mobile Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8368] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 6668] (0)Macro Key Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 6668] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; GridPlugin; 4956; 8900] [Initialize] m_inUserSession = 0
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7964] (0)GameLibrary Pluing into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 7964] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Monitor Plugin; 4956; 8684] CheckXTUImagePath result: 0, isChanged: 0, type: 0
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7160] (0)Utility Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 7160] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Monitor Plugin; 4956; 8684] ProductLine - 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8436] (0)GameBoxPlugIn into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8436] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; GridPlugin; 4956; 8900] [Initialize] Type 40 = 99
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8324] (0)AC_FDSPlugIn into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8324] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; WARNING; Aura Pluing; 4956; 8336] [AuraPlugin][Initial] Start
2024-01-20 19:22:33; WARNING; Aura Pluing; 4956; 8336] [AuraPlugin][Initial] End
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8336] (0)Aura Pluing into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8336] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2964] (0)Loopback Stream into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 2964] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Virtual Drive Plugin; 4956; 7144] Success Load
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7144] (0)Virtual Drive Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 7144] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2972] Before Library GPU Power Saving Plugin  into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8408] Before Library NormalSwitch Plugin  into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8408] (0)NormalSwitch Plugin  into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8408] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2988] Before Library Free Up Memory Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 5184] Before Library HW Pluing into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8428] Before Library Throttle Plugin into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 5184] (0)HW Pluing into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 5184] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 9108] (0)WebSocketClientPlugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 9108] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; User Experience Improvement Plugin; 4956; 7156] AC UWP Info: isInstalled:True, Version:5.6.10.0, PPRead:True, PPAgreed:True
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] CPU Vendor ID : 1, CPU Name: Intel(R) Core(TM) i5-10300H CPU @ 2.50GHz
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] CheckXTUImagePath result: 0, isChanged: 0, type: 0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] SubBrand - 2
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] ProductLine - 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8700] (0)ACStore Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8700] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2988] (0)Free Up Memory Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 2988] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 7156] (1)User Experience Improvement Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 7156] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8744] (0)DenoiseAI Pluing into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8744] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8900] (1)GridPlugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8900] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] SupportThrottleMode - 3 - 3
2024-01-20 19:22:33; INFO; Monitor Plugin; 4956; 8684] Create CPUInforReader.
2024-01-20 19:22:33; INFO; Service Manager; 4956; 2972] (11)GPU Power Saving Plugin  into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 2972] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; SoulKey Plugin; 4956; 6648] Soulkey Plugin : Check whether it support Keystone or not.
2024-01-20 19:22:33; INFO; Service Manager; 4956; 6648] (25)SoulKey Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 6648] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; WARNING; Monitor Plugin; 4956; 8684] (CPUInfoReader)Support ASIO Temperature 
2024-01-20 19:22:33; WARNING; Monitor Plugin; 4956; 8684] (CPUInfoReader)Support ASIO Voltage 
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8548] (73)DeviceServicePlugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8548] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; GameVisual Plugin; 4956; 8136] GameVisualPlugin::GetProjectYearFromGPNV(): Read Failed: 0x000000cb
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 8428] Get exit code of ConfigHelper: 0
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 8428] PDDataCollector Start result = 1
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] UpdateDynamicCore, max PCore=0, max ECore=0, current PCore=0, current ECore=0
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 8428] No VariBright Configures
2024-01-20 19:22:33; INFO; GameVisual Plugin; 4956; 8136] GameVisualPlugin::Initialize(): Initialize in Service.
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8136] (164)GameVisual Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8136] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8684] (428)Monitor Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8684] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] NB, Config Load: 1
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] IsSupportFanCurve[0] : 0 
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] IsSupportFanCurve[1] : 0 
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] IsSupportFanCurve[2] : 1 
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] IsDTLidClosed 0, SupportDTLid 0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] SupportPDStatus 0, pd 0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] ACMode 3, DCMode 1
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] Is Load : 1 
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] Overclock Type:3  
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 3280] Begin DequeueJob, StopEvent 0000000000000EE8 JobAddedEvent 0000000000000EEC
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] Manual File is exist, LastPowerMode: 0, ACThrottleMode: 3
2024-01-20 19:22:33; WARNING; Throttle Plugin; 4956; 8428] GetEGPUConfig for EGPU config: 0x80004003
2024-01-20 19:22:33; WARNING; Throttle Plugin; 4956; 8428] GetEGPUID for EGPU: 0x80070006
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] GetGPUTuningValue, Result:0x00000000, Values:0x00000003, ProcessorFrequency:0, MemoryFrequency:0, PowerTarget:0, ThermalTarget:0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] GetGPUTuningRange, Result:0x00000000, Values:0x00000003, MaxProcessorFrequency:1000000, MinProcessorFrequency:-1000000, MaxMemoryFrequency:3000000, MinMemoryFrequency:-1000000, MaxPowerTarget:0, MinPowerTarget:0, MaxThermalTarget:0, MinThermalTarget:0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] ReloadGPUInformation dwGpuType:1, 
TuningRange - MaxProcessorFrequency:150000, MinProcessorFrequency:0, MaxMemoryFrequency:200000, MinMemoryFrequency:0, MaxDynamicBoost:-1, MinDynamicBoost:0, MaxNBThermalTarget:-1, MinNBThermalTarget:0, 
DC TuningRange - MaxProcessorFrequency:0, MinProcessorFrequency:0, MaxMemoryFrequency:0, MinMemoryFrequency:0, MaxDynamicBoost:0, MinDynamicBoost:0, MaxNBThermalTarget:0, MinNBThermalTarget:0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] DeleteThrottleGearDCManualFile
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] NeedXTUDriver Begin, File Exist 1, CPUVendorID 1, OverclockType 3 TGCpuInfo[2] 0000000000000000
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] NeedXTUDriver End, need 0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] SupportPerCoreOC: 0, bPerCoreDisplayed 0, TGCpuInfo[HM_PERFORMANTION]: 0000000000000000
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8428] (578)Throttle Plugin into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8428] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8956] Before Library ScenarioProfilePlugIn into AddChildLibrary
2024-01-20 19:22:33; INFO; Service Manager; 4956; 8956] (0)ScenarioProfilePlugIn into AddChildLibrary OK
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 8956] Initialized 1, JoinInInitialize 0, WithUserSession 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Stop Registering
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Registered Power Setting: (6FE69556-704A-47A0-8F24-C28D936FDA47), hPowerNotify: 000001735F043210
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Registered Power Setting: (BA3E0F4D-B817-4094-A2D1-D56379E6A0F3), hPowerNotify: 000001735F042D40
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Registered Power Setting: (5D3E9A59-E9D5-4B00-A6BD-FF34FF516548), hPowerNotify: 000001735F041F40
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F041D90
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] Registered Power Setting: (A7AD8041-B45A-4CAE-87A3-EECBB468A9E1), hPowerNotify: 000001735F042950
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] NotifyUserSession Stop Registering Result: 0x80004005
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] NotifyServiceInitialized Start, init:1, fullInit:1.
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F042E30
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] GUID_ACDC_POWER_SOURCE Power=0, pms.size=0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] bFirst 1
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F042E30
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] Power change to AC, BIOS will show OSD
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F042730
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] AITweakerStatus 0, AISuiteInstalled 0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 8428] SupportPadMode 0, IsPadMode 0, IsVertical 0
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 8428] GetHyperFanSettings sn 0, IsLocked 0, HyperFanMode 3, IsCPUManual 0, IsCPUDCManual 0, IsGPUManual 1, IsGPUDCManual 0
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 8428] CPU Use mode 3
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 8428] GPU Use mode 3
2024-01-20 19:22:33; INFO; ScenarioProfilePlugIn; 4956; 3280] ProcessRequest : HyperFanStatusChange
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 3280] HyperFan Job(sn 0, remaining 0): IsChanged 1, ResultForNotifyConsole 0, ResultForNotifyUserSession 0, ResultForNotifyOtherPlugin 1, ID (467227BF-4B16-462A-8ABB-9BA331EE45DB), Trigger 0x00000008, Mode 3, ModeForUI 3, Current Status 0x0000000F, Supported 0x0000000F, IsAC 1, HasPD100W 0, IsLocked 0, AITweakerStatus 0, AISuiteInstalled 0, IsPadMode 0, IsVertical 0, JustDo 0, ShowOSD 0, NotifyUI 1, bSupportXGMobile 0, bOCControlByAP 0
2024-01-20 19:22:33; INFO; AEF Core; 4956; 2980] (SetQos)Set Qos to High: ArmouryCrateControlInterface.exe - Success.(18)
2024-01-20 19:22:33; INFO; AEF Core; 4956; 2980] (SetQos)Set Qos to High: ArmouryCrate.Service.exe - Success.(18)
2024-01-20 19:22:33; INFO; AEF Core; 4956; 2980] (SetQos)Set Qos to High: LightingService.exe - Success.(18)
2024-01-20 19:22:33; INFO; AEF Core; 4956; 2980] (SetQos)Set Qos to High: ROGLiveService.exe - Success.(18)
2024-01-20 19:22:33; CRITICAL; Throttle Plugin; 4956; 9240] ApplyHyperFan sn 0, IsLocked 0, HyperFanMode 3
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 9240] IsGPUTweakEnabled:0, Mode:3
2024-01-20 19:22:33; INFO; AEF Core; 4956; 4728] AsusDeviceMonitor is started.
2024-01-20 19:22:33; INFO; GameBoxPlugIn; 4956; 4728] Full Initialized.
2024-01-20 19:22:33; INFO; Monitor Plugin; 4956; 4728] Receive SM_SERVICE_INITIALIZED
2024-01-20 19:22:33; INFO; Mobile Plugin; 4956; 4728] AC UWP Info: isInstalled:True, Version:5.6.10.0, PPRead:True, PPAgreed:True
2024-01-20 19:22:33; INFO; ScenarioProfilePlugIn; 4956; 4728] AC UWP Info: isInstalled:True, Version:5.6.10.0, PPRead:True, PPAgreed:True
2024-01-20 19:22:33; INFO; Throttle Plugin; 4956; 4728] Receive SM_SERVICE_INITIALIZED
2024-01-20 19:22:33; INFO; Service Manager; 4956; 4728] NotifyServiceInitialized End
2024-01-20 19:22:33; CRITICAL; Service Manager; 4956; 4728] /------------Service initialized: 0x00000000------------/
2024-01-20 19:22:34; INFO; Throttle Plugin; 4956; 9240] GetGPUTuningValue, Mode:3, Result:0x00000000, Values:0x00000003, ProcessorFrequency:100000, MemoryFrequency:120000, PowerTarget:-2147483648, ThermalTarget:-2147483648
2024-01-20 19:22:34; INFO; Throttle Plugin; 4956; 9240] SetVariBright No VariBright Configures
2024-01-20 19:22:37; WARNING; AEF Core; 4956; 9236] (AsusDeviceMonitor)RLS Connection Status change:(4097)Connected.
2024-01-20 19:22:37; INFO; DenoiseAI Pluing; 4956; 9236] OnRLSMessage => 4097:FALSE
2024-01-20 19:22:37; WARNING; AEF Core; 4956; 9236] Get Asus Device Change Message msg:3, device:64, modelname:FX506LH, id:
2024-01-20 19:22:37; INFO; DenoiseAI Pluing; 4956; 9236] OnAsusDeviceChanged => Attached Device - DeviceType=64, DeviceName:FX506LH, DeviceId=
2024-01-20 19:22:37; INFO; DenoiseAI Pluing; 4956; 9236] Query AttachedDeviceList=>
(
  0:(
    Attributes:(
      CheckBoxEnable:1,
      DependentAppStatus:0,
      DeviceCount:1,
      DeviceGUID:3F49AD29-52D9-46A5-A608-203D54E7D12A,
      DeviceIndex:0,
      DisplayName:FX506LH,
      FirstPluginNeedUpdate:0,
      InfoIconEnable:0,
      LightingMode:0,
      LinkToDeviceEnable:0,
      LocalFrameworkVersion:4.0.0.9,
      LocalHtmlVersion:0,
      LocalMainSDKVersion:2.00.36,
      LocalSDKVersion:0,
      NeedRestart:false,
      PIDMode:0,
      ServerFrameworkVersion:4.1.0.13,
      ServerHtmlVersion:0,
      ServerMainSDKVersion:2.01.09,
      ServerSDKVersion:0,
      SupportCreator:false,
    ),
    DeviceId:,
    DeviceName:FX506LH,
    DeviceType:64,
  ),
  Count:1,
  DeviceSDK:(
  ),
)
2024-01-20 19:22:37; INFO; NormalSwitch Plugin ; 4956; 9236] OnAsusDeviceChanged => Attached Device - DeviceType=64, DeviceName:FX506LH, DeviceId=
2024-01-20 19:22:37; INFO; NormalSwitch Plugin ; 4956; 9236] Query AttachedDeviceList=>
(
  0:(
    Attributes:(
      CheckBoxEnable:1,
      DependentAppStatus:0,
      DeviceCount:1,
      DeviceGUID:3F49AD29-52D9-46A5-A608-203D54E7D12A,
      DeviceIndex:0,
      DisplayName:FX506LH,
      FirstPluginNeedUpdate:0,
      InfoIconEnable:0,
      LightingMode:0,
      LinkToDeviceEnable:0,
      LocalFrameworkVersion:4.0.0.9,
      LocalHtmlVersion:0,
      LocalMainSDKVersion:2.00.36,
      LocalSDKVersion:0,
      NeedRestart:false,
      PIDMode:0,
      ServerFrameworkVersion:4.1.0.13,
      ServerHtmlVersion:0,
      ServerMainSDKVersion:2.01.09,
      ServerSDKVersion:0,
      SupportCreator:false,
    ),
    DeviceId:,
    DeviceName:FX506LH,
    DeviceType:64,
  ),
  Count:1,
  DeviceSDK:(
  ),
)
2024-01-20 19:22:38; WARNING; AEF Core; 4956; 9236] (AsusDeviceMonitor)Receive Attached but device(64:FX506LH::0) already exists...do update
2024-01-20 19:22:38; WARNING; AEF Core; 4956; 9236] Get Asus Device Change Message msg:3, device:64, modelname:FX506LH, id:
2024-01-20 19:22:38; INFO; DenoiseAI Pluing; 4956; 9236] OnAsusDeviceChanged => Attached Device - DeviceType=64, DeviceName:FX506LH, DeviceId=
2024-01-20 19:22:38; INFO; DenoiseAI Pluing; 4956; 9236] Query AttachedDeviceList=>
(
  0:(
    Attributes:(
      CheckBoxEnable:1,
      DependentAppStatus:0,
      DeviceCount:1,
      DeviceGUID:3F49AD29-52D9-46A5-A608-203D54E7D12A,
      DeviceIndex:0,
      DisplayName:FX506LH,
      FirstPluginNeedUpdate:0,
      InfoIconEnable:0,
      LightingMode:0,
      LinkToDeviceEnable:0,
      LocalFrameworkVersion:4.0.0.9,
      LocalHtmlVersion:0,
      LocalMainSDKVersion:2.00.36,
      LocalSDKVersion:0,
      NeedRestart:false,
      PIDMode:0,
      ServerFrameworkVersion:4.1.0.13,
      ServerHtmlVersion:0,
      ServerMainSDKVersion:2.01.09,
      ServerSDKVersion:0,
      SupportCreator:false,
    ),
    DeviceId:,
    DeviceName:FX506LH,
    DeviceType:64,
  ),
  Count:1,
  DeviceSDK:(
  ),
)
2024-01-20 19:22:38; INFO; NormalSwitch Plugin ; 4956; 9236] OnAsusDeviceChanged => Attached Device - DeviceType=64, DeviceName:FX506LH, DeviceId=
2024-01-20 19:22:38; INFO; NormalSwitch Plugin ; 4956; 9236] Query AttachedDeviceList=>
(
  0:(
    Attributes:(
      CheckBoxEnable:1,
      DependentAppStatus:0,
      DeviceCount:1,
      DeviceGUID:3F49AD29-52D9-46A5-A608-203D54E7D12A,
      DeviceIndex:0,
      DisplayName:FX506LH,
      FirstPluginNeedUpdate:0,
      InfoIconEnable:0,
      LightingMode:0,
      LinkToDeviceEnable:0,
      LocalFrameworkVersion:4.0.0.9,
      LocalHtmlVersion:0,
      LocalMainSDKVersion:2.00.36,
      LocalSDKVersion:0,
      NeedRestart:false,
      PIDMode:0,
      ServerFrameworkVersion:4.1.0.13,
      ServerHtmlVersion:0,
      ServerMainSDKVersion:2.01.09,
      ServerSDKVersion:0,
      SupportCreator:false,
    ),
    DeviceId:,
    DeviceName:FX506LH,
    DeviceType:64,
  ),
  Count:1,
  DeviceSDK:(
  ),
)
2024-01-20 19:22:38; WARNING; AEF Core; 4956; 9236] Get Asus Device Change Message msg:9, device:0, modelname:, id:
2024-01-20 19:22:39; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper TryLock
2024-01-20 19:22:39; INFO; Service Manager; 4956; 9232] CheckUserSessionHelper info: new SessionId = 1, old SessionId = -1, UserSessionMonitorThread = 0000000000000000
2024-01-20 19:22:39; WARNING; Service Manager; 4956; 9232] WTSQueryUserToken Failed: 0
2024-01-20 19:22:39; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper Unlock
2024-01-20 19:22:40; INFO; DenoiseAI Pluing; 4956; 9236] OnRLSMessage => 18:
2024-01-20 19:22:49; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper TryLock
2024-01-20 19:22:49; INFO; Service Manager; 4956; 9232] CheckUserSessionHelper info: new SessionId = 1, old SessionId = -1, UserSessionMonitorThread = 0000000000000000
2024-01-20 19:22:49; WARNING; Service Manager; 4956; 9232] WTSQueryUserToken Failed: 0
2024-01-20 19:22:49; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper Unlock
2024-01-20 19:22:59; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper TryLock
2024-01-20 19:22:59; INFO; Service Manager; 4956; 9232] CheckUserSessionHelper info: new SessionId = 1, old SessionId = -1, UserSessionMonitorThread = 0000000000000000
2024-01-20 19:22:59; WARNING; Service Manager; 4956; 9232] WTSQueryUserToken Failed: 0
2024-01-20 19:22:59; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper Unlock
2024-01-20 19:23:09; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper TryLock
2024-01-20 19:23:09; INFO; Service Manager; 4956; 9232] CheckUserSessionHelper info: new SessionId = 1, old SessionId = -1, UserSessionMonitorThread = 0000000000000000
2024-01-20 19:23:09; WARNING; Service Manager; 4956; 9232] WTSQueryUserToken Failed: 0
2024-01-20 19:23:09; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper Unlock
2024-01-20 19:23:19; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper TryLock
2024-01-20 19:23:19; INFO; Service Manager; 4956; 9232] CheckUserSessionHelper info: new SessionId = 1, old SessionId = -1, UserSessionMonitorThread = 0000000000000000
2024-01-20 19:23:19; WARNING; Service Manager; 4956; 9232] WTSQueryUserToken Failed: 0
2024-01-20 19:23:19; CRITICAL; Service Manager; 4956; 9232] FlowLock CheckUserSessionHelper Unlock
2024-01-20 19:23:23; CRITICAL; Service Manager; 4956; 4960] FlowLock OnSessionChange TryLock
2024-01-20 19:23:23; CRITICAL; Service Manager; 4956; 4960] OnSessionChange Start, EventType = 5, EventData = 8, New SessionId = 1, Old SessionId = -1
2024-01-20 19:23:23; INFO; Service Manager; 4956; 4960] OnSessionChange Before StopUserSessionHelper, SessionId = -1
2024-01-20 19:23:23; CRITICAL; Service Manager; 4956; 4960] !--------StopUserSessionHelper Start Process Handle = 0000000000000000--------!
2024-01-20 19:23:23; CRITICAL; Service Manager; 4956; 4960] !--------StopUserSessionHelper End Process Handle = 0000000000000000--------!
2024-01-20 19:23:23; CRITICAL; Service Manager; 4956; 4960] !--------RunUserSessionHelper Start Process Handle = 0000000000000000--------!
2024-01-20 19:23:23; INFO; Service Manager; 4956; 6472] WTSGetActiveConsoleSessionId: 1
2024-01-20 19:23:23; INFO; Service Manager; 4956; 6472] Into QueryUserToken: 1, 00000000000003EC
2024-01-20 19:23:25; INFO; AEF Core; 4956; 6472] Before library join to ush
2024-01-20 19:23:25; INFO; AEF Core; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:25; INFO; SoulKey Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:25; INFO; SoulKey Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:25; INFO; GameBoxPlugIn; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; GameBoxPlugIn; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; DeviceServicePlugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; DeviceServicePlugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; Aura Pluing; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; Aura Pluing; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; Loopback Stream; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; Loopback Stream; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; ACStore Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; ACStore Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; UserCenterPlugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; UserCenterPlugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; AC_FDSPlugIn; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; AC_FDSPlugIn; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; Free Up Memory Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; Free Up Memory Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; DenoiseAI Pluing; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; DenoiseAI Pluing; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; GameLibrary Pluing; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; GameLibrary Pluing; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; GameVisual Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:26; INFO; GameVisual Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:26; INFO; GPU Power Saving Plugin ; 4956; 6472] Before library join to ush
2024-01-20 19:23:27; INFO; GPU Power Saving Plugin ; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:27; INFO; NormalSwitch Plugin ; 4956; 6472] Before library join to ush
2024-01-20 19:23:27; INFO; NormalSwitch Plugin ; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:27; INFO; GridPlugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; GridPlugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; HW Pluing; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; HW Pluing; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Macro Key Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; Macro Key Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Monitor Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; Monitor Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Mobile Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; Mobile Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; ScenarioProfilePlugIn; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; ScenarioProfilePlugIn; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; WebSocketClientPlugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; WebSocketClientPlugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Throttle Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; Throttle Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; User Experience Improvement Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; User Experience Improvement Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Utility Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; Utility Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Virtual Drive Plugin; 4956; 6472] Before library join to ush
2024-01-20 19:23:28; INFO; Virtual Drive Plugin; 4956; 6472] Library join to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; Service Manager; 4956; 6472] NotifyUserSession Start Registering Result: 0x00000000
2024-01-20 19:23:28; INFO; AEF Core; 4956; 6472] Before Library init to ush
2024-01-20 19:23:28; INFO; AEF Core; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; UserCenterPlugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:28; INFO; UserCenterPlugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:28; INFO; SoulKey Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:29; INFO; SoulKey Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:29; INFO; GameBoxPlugIn; 4956; 6472] Before Library init to ush
2024-01-20 19:23:29; INFO; GameBoxPlugIn; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:29; INFO; Mobile Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:29; INFO; Mobile Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:29; INFO; DeviceServicePlugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:30; INFO; DeviceServicePlugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:30; INFO; AC_FDSPlugIn; 4956; 6472] Before Library init to ush
2024-01-20 19:23:30; INFO; AC_FDSPlugIn; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:30; INFO; Aura Pluing; 4956; 6472] Before Library init to ush
2024-01-20 19:23:33; INFO; Aura Pluing; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:33; INFO; Loopback Stream; 4956; 6472] Before Library init to ush
2024-01-20 19:23:33; INFO; AEF Core; 4956; 1248] Enter GetPacket loop - UserSessionHelper.
2024-01-20 19:23:33; INFO; Loopback Stream; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:33; INFO; ACStore Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:33; INFO; ACStore Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:33; INFO; Free Up Memory Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:33; INFO; Free Up Memory Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:33; INFO; GameVisual Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:34; INFO; GameVisual Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:34; INFO; GameLibrary Pluing; 4956; 6472] Before Library init to ush
2024-01-20 19:23:34; INFO; GameVisual Plugin; 4956; 13388] GameVisualPlugin::ProcessNotifFromUSH(): Init: UserSessionInitEnd @ SERVICE.
2024-01-20 19:23:34; INFO; GameVisual Plugin; 4956; 13388] GameVisualPlugin::ProcessNotifFromUSH(): Init: Service Initialized.
2024-01-20 19:23:34; INFO; GameVisual Plugin; 4956; 13392] GameVisualPlugin::GVHiddenWndProcThrd(): GameVisual Svc Hidden Wnd Hidden Window Creation OK!
2024-01-20 19:23:34; INFO; GameLibrary Pluing; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:34; INFO; DenoiseAI Pluing; 4956; 6472] Before Library init to ush
2024-01-20 19:23:34; INFO; DenoiseAI Pluing; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:34; INFO; GPU Power Saving Plugin ; 4956; 6472] Before Library init to ush
2024-01-20 19:23:35; INFO; GameBoxPlugIn; 4956; 8436] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; AC_FDSPlugIn; 4956; 8324] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; Free Up Memory Plugin; 4956; 2988] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; GameLibrary Pluing; 4956; 7964] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; DenoiseAI Pluing; 4956; 8744] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; GPU Power Saving Plugin ; 4956; 2972] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; NormalSwitch Plugin ; 4956; 8408] OnUWPConnectionChange : true.
2024-01-20 19:23:35; INFO; Monitor Plugin; 4956; 8684] TryStopMonitor: m_isUWPConnected 1, m_bAuraTempModeEnabled 0, pSdk 000001735F0D2960, m_pCPUInfoReader 000001735F0F2080
2024-01-20 19:23:35; INFO; AEF Core; 4956; 13868] Enter GetPacket loop - Console.
2024-01-20 19:23:38; INFO; GPU Power Saving Plugin ; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; NormalSwitch Plugin ; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; NormalSwitch Plugin ; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; GridPlugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; GridPlugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; HW Pluing; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; HW Pluing; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; Monitor Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; Monitor Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; Macro Key Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; Macro Key Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; Throttle Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; Throttle Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; ScenarioProfilePlugIn; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; Throttle Plugin; 4956; 14744] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:23:38; INFO; ScenarioProfilePlugIn; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; WebSocketClientPlugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; CRITICAL; Throttle Plugin; 4956; 14764] Handle Command : 61444
2024-01-20 19:23:38; INFO; ScenarioProfilePlugIn; 4956; 14764] Data from HyperFan (Service) : AITweakerStatus 0, AISuiteInstalled 0
2024-01-20 19:23:38; INFO; WebSocketClientPlugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; Utility Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; Utility Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; User Experience Improvement Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; User Experience Improvement Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; Virtual Drive Plugin; 4956; 6472] Before Library init to ush
2024-01-20 19:23:38; INFO; Virtual Drive Plugin; 4956; 6472] Library init to ush, result = 0x00000000
2024-01-20 19:23:38; INFO; Service Manager; 4956; 6472] NotifyUserSession Stop Registering Result: 0x00000000
2024-01-20 19:23:38; INFO; Service Manager; 4956; 6472] NotifyServiceInitialized Start, init:1, fullInit:1.
2024-01-20 19:23:38; INFO; Throttle Plugin; 4956; 14864] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:23:38; INFO; Throttle Plugin; 4956; 14944] PowerModeChangeEvent mode=1, pms.size=0
2024-01-20 19:23:38; INFO; Service Manager; 4956; 6472] NotifyServiceInitialized End
2024-01-20 19:23:38; CRITICAL; Service Manager; 4956; 4960] !--------RunUserSessionHelper End Process Handle = 0000000000000F2C, Process Id = 8776--------!
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnSessionChange After RunUserSessionHelper, SessionId = 1
2024-01-20 19:23:38; ERROR; SoulKey Plugin; 4956; 6648] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; AC_FDSPlugIn; 4956; 8324] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; GameBoxPlugIn; 4956; 8436] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; GameLibrary Pluing; 4956; 7964] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; GPU Power Saving Plugin ; 4956; 2972] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; NormalSwitch Plugin ; 4956; 8408] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; DeviceServicePlugin; 4956; 8548] [DeviceServicePlugin] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; Free Up Memory Plugin; 4956; 2988] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; WebSocketClientPlugin; 4956; 9108] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; CRITICAL; Service Manager; 4956; 4960] OnSessionChange End, EventType = 5, EventData = 8, New SessionId = 1, Old SessionId = -1
2024-01-20 19:23:38; ERROR; DenoiseAI Pluing; 4956; 8744] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; CRITICAL; Service Manager; 4956; 4960] FlowLock OnSessionChange Unlock
2024-01-20 19:23:38; ERROR; Virtual Drive Plugin; 4956; 7144] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; ERROR; Mobile Plugin; 4956; 8368] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; INFO; ScenarioProfilePlugIn; 4956; 8956] UserSession:0, OnSessionChange: Event:5
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:23:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:23:38; INFO; Throttle Plugin; 4956; 14952] PowerModeChangeEvent mode=1, pms.size=0
2024-01-20 19:23:39; INFO; ScenarioProfilePlugIn; 4956; 15044] start GetCurrentHyperFanMode
2024-01-20 19:23:39; CRITICAL; Throttle Plugin; 4956; 15044] Handle Command : 61442
2024-01-20 19:23:39; INFO; ScenarioProfilePlugIn; 4956; 15044] (
  Command:61442,
  Mode:8,
)
2024-01-20 19:23:39; CRITICAL; Throttle Plugin; 4956; 15044] Handle Command : 61442
2024-01-20 19:23:39; INFO; ScenarioProfilePlugIn; 4956; 15044] (
  Command:61442,
  Mode:8,
)
2024-01-20 19:23:39; INFO; ScenarioProfilePlugIn; 4956; 15044] End GetCurrentHyperFanMode
2024-01-20 19:23:40; CRITICAL; Throttle Plugin; 4956; 15312] Handle Command : 16
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:24:16; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:28; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:28:29; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:29:38; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:29:38; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F046240
2024-01-20 19:29:38; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:29:38; INFO; Throttle Plugin; 4956; 2188] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:29:53; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:29:53; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F046630
2024-01-20 19:29:53; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:29:53; INFO; Throttle Plugin; 4956; 8888] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047040
2024-01-20 19:31:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:31:33; INFO; Throttle Plugin; 4956; 1836] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:34:18; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:34:18; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047510
2024-01-20 19:34:18; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:34:18; INFO; Throttle Plugin; 4956; 2956] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:34:26; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:34:26; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047510
2024-01-20 19:34:26; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:34:26; INFO; Throttle Plugin; 4956; 6380] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:39:23; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:39:23; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F0473C0
2024-01-20 19:39:23; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:39:23; INFO; Throttle Plugin; 4956; 4720] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047270
2024-01-20 19:39:35; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 19:39:35; INFO; Throttle Plugin; 4956; 6352] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:21:11; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:21:11; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047510
2024-01-20 21:21:11; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:21:11; INFO; Throttle Plugin; 4956; 12472] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:21:26; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:21:26; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F0482A0
2024-01-20 21:21:26; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:21:26; INFO; Throttle Plugin; 4956; 20420] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047F20
2024-01-20 21:37:20; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:37:20; INFO; Throttle Plugin; 4956; 20272] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:42:28; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:42:28; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047B30
2024-01-20 21:42:28; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:42:28; INFO; Throttle Plugin; 4956; 20920] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:42:43; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:42:43; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F046D30
2024-01-20 21:42:43; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:42:43; INFO; Throttle Plugin; 4956; 20528] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:43:00; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:43:00; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:43:00; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:43:00; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:43:00; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:43:00; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:43:01; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:43:01; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F046D30
2024-01-20 21:43:01; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:43:01; INFO; Throttle Plugin; 4956; 2720] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:45:46; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:45:46; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F048310
2024-01-20 21:45:46; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:45:46; INFO; Throttle Plugin; 4956; 20036] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:46:01; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:46:01; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047510
2024-01-20 21:46:01; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:46:01; INFO; Throttle Plugin; 4956; 19216] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:46:32; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:46:32; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:46:32; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:46:32; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:46:32; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:46:32; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:46:33; INFO; Throttle Plugin; 4956; 20272] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:46:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:46:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047B30
2024-01-20 21:46:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:49:18; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:49:18; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F0480E0
2024-01-20 21:49:18; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:49:18; INFO; Throttle Plugin; 4956; 16872] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:49:33; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:49:33; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F046D30
2024-01-20 21:49:33; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:49:33; INFO; Throttle Plugin; 4956; 336] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047740
2024-01-20 21:49:56; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:49:56; INFO; Throttle Plugin; 4956; 20428] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:52:42; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:52:42; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F048770
2024-01-20 21:52:42; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:52:42; INFO; Throttle Plugin; 4956; 8832] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:52:57; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:52:57; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F0482A0
2024-01-20 21:52:57; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:52:57; INFO; Throttle Plugin; 4956; 20128] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F047120
2024-01-20 21:53:38; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 21:53:38; INFO; Throttle Plugin; 4956; 3684] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 22:00:45; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 22:00:45; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F0479E0
2024-01-20 22:00:45; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 22:00:45; INFO; Throttle Plugin; 4956; 19588] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnPowerChange Start
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnPowerChange dwEventType=32787, lpEventData=000001735F0479E0
2024-01-20 22:00:57; INFO; Service Manager; 4956; 4960] OnPowerChange End
2024-01-20 22:00:57; INFO; Throttle Plugin; 4956; 20696] IsPadMode 0, IsVertical 0, IsSupported 0
2024-01-20 22:02:44; INFO; Throttle Plugin; 4956; 2384] PowerModeChangeEvent mode=4, pms.size=0
2024-01-20 22:04:10; INFO; Throttle Plugin; 4956; 22424] PowerModeChangeEvent mode=1, pms.size=0
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange End
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange Start
2024-01-20 22:04:31; INFO; Service Manager; 4956; 4960] OnDeviceChange End
</pre>
</main>