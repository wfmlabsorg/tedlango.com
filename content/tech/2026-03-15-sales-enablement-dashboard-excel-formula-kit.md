---
title: "Sales Enablement Dashboard - Excel Formula Kit"
date: 2026-03-15
tags: ["excel", "dashboard", "tools"]
draft: false
---

Copy-paste Excel formulas for building a 4-quadrant executive dashboard from an Action Item Tracker. All formulas use flexible ranges (row 5 to 1000) so they work whether the data has 90 or 500 rows.

## Data Source Reference

- **Sheet name:** `Data` (adjust to match your tracker tab name)
- **Data starts:** Row 5
- **Column map:**
  - A = Priority, B = Area, C = Type, D = Project Name
  - E = Action, F = Start Date, G = ETA to Complete
  - H = Owner, I = Status, J = (color), K = Last Update, L = Notes

---

## Quadrant 1: Portfolio Health (4 KPI Tiles)

### Total Projects
```
=COUNTA('Data'!D5:D1000)
```
Counts non-blank Project Name cells.

### In Progress
```
=COUNTIF('Data'!I5:I1000,"*In Progress*")
```
Catches "In Progress - OK", "In Progress - Alert", "In Progress - Issue" with wildcard.

### At Risk (Red/Yellow)
```
=COUNTIF('Data'!I5:I1000,"*Alert*")+COUNTIF('Data'!I5:I1000,"*Issue*")
```

### Risk Rate
```
=IF(COUNTA('Data'!D5:D1000)=0,0,(COUNTIF('Data'!I5:I1000,"*Alert*")+COUNTIF('Data'!I5:I1000,"*Issue*"))/COUNTA('Data'!D5:D1000))
```
Format cell as percentage.

### Optional KPIs
```
Complete:        =COUNTIF('Data'!I5:I1000,"Complete")
Not Started:     =COUNTIF('Data'!I5:I1000,"Not Started")
OK (on track):   =COUNTIF('Data'!I5:I1000,"*OK*")
```

---

## Quadrant 2: Projects by Area (Stacked Bar Chart)

### Total by Area
Replace `AREA1`, `AREA2`, etc. with whatever values appear in your Column B:
```
Area 1:  =COUNTIF('Data'!B5:B1000,"AREA1")
Area 2:  =COUNTIF('Data'!B5:B1000,"AREA2")
Area 3:  =COUNTIF('Data'!B5:B1000,"AREA3")
Area 4:  =COUNTIF('Data'!B5:B1000,"AREA4")
Area 5:  =COUNTIF('Data'!B5:B1000,"AREA5")
Area 6:  =COUNTIF('Data'!B5:B1000,"AREA6")
```

Adjust match values to match exactly what appears in your Column B.

### Status breakdown per Area
Replace `AREA_VALUE` with the actual value from Column B:
```
Complete:    =COUNTIFS('Data'!B5:B1000,"AREA_VALUE",'Data'!I5:I1000,"Complete")
OK:          =COUNTIFS('Data'!B5:B1000,"AREA_VALUE",'Data'!I5:I1000,"*OK*")
Alert:       =COUNTIFS('Data'!B5:B1000,"AREA_VALUE",'Data'!I5:I1000,"*Alert*")
Issue:       =COUNTIFS('Data'!B5:B1000,"AREA_VALUE",'Data'!I5:I1000,"*Issue*")
Not Started: =COUNTIFS('Data'!B5:B1000,"AREA_VALUE",'Data'!I5:I1000,"Not Started")
```

Select the summary table, then Insert > Bar Chart > Stacked Bar.

---

## Quadrant 3: Status by Owner (Stacked Bar Chart)

### Total by Owner
Replace `Name1`, `Name2`, etc. with actual owner names from Column H:
```
Name1:  =COUNTIF('Data'!H5:H1000,"Name1")
Name2:  =COUNTIF('Data'!H5:H1000,"Name2")
Name3:  =COUNTIF('Data'!H5:H1000,"Name3")
Name4:  =COUNTIF('Data'!H5:H1000,"Name4")
```

### Dynamic unique owner list (Excel 365)
```
=SORT(UNIQUE(FILTER('Data'!H5:H1000,'Data'!H5:H1000<>"")))
```

### Status breakdown per Owner
Replace `OWNER_NAME` with the actual name:
```
Complete:    =COUNTIFS('Data'!H5:H1000,"OWNER_NAME",'Data'!I5:I1000,"Complete")
OK:          =COUNTIFS('Data'!H5:H1000,"OWNER_NAME",'Data'!I5:I1000,"*OK*")
Alert:       =COUNTIFS('Data'!H5:H1000,"OWNER_NAME",'Data'!I5:I1000,"*Alert*")
Issue:       =COUNTIFS('Data'!H5:H1000,"OWNER_NAME",'Data'!I5:I1000,"*Issue*")
Not Started: =COUNTIFS('Data'!H5:H1000,"OWNER_NAME",'Data'!I5:I1000,"Not Started")
```

---

## Quadrant 4: Aging Analysis (Column Chart)

### Helper column (recommended)
Add Column M header "Age Days" on the data sheet. In cell M5, drag down:
```
=IF(AND(F5<>"",I5<>"Complete"),TODAY()-F5,"")
```

### Aging Buckets
```
0-7 days:   =COUNTIFS('Data'!M5:M1000,">="&0,'Data'!M5:M1000,"<="&7)
8-14 days:  =COUNTIFS('Data'!M5:M1000,">="&8,'Data'!M5:M1000,"<="&14)
15-30 days: =COUNTIFS('Data'!M5:M1000,">="&15,'Data'!M5:M1000,"<="&30)
31-60 days: =COUNTIFS('Data'!M5:M1000,">="&31,'Data'!M5:M1000,"<="&60)
60+ days:   =COUNTIFS('Data'!M5:M1000,">"&60)
```

### Average Age
```
=AVERAGEIF('Data'!M5:M1000,"<>"&"")
```

### Projects Over 60 Days
```
=COUNTIFS('Data'!M5:M1000,">"&60)
```

### Without helper column (SUMPRODUCT approach)
```
0-7 days:   =SUMPRODUCT((('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*(TODAY()-'Data'!F5:F1000>=0)*(TODAY()-'Data'!F5:F1000<=7)))
8-14 days:  =SUMPRODUCT((('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*(TODAY()-'Data'!F5:F1000>=8)*(TODAY()-'Data'!F5:F1000<=14)))
15-30 days: =SUMPRODUCT((('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*(TODAY()-'Data'!F5:F1000>=15)*(TODAY()-'Data'!F5:F1000<=30)))
31-60 days: =SUMPRODUCT((('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*(TODAY()-'Data'!F5:F1000>=31)*(TODAY()-'Data'!F5:F1000<=60)))
60+ days:   =SUMPRODUCT((('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*(TODAY()-'Data'!F5:F1000>60)))
```

### Average Age (no helper column)
```
=SUMPRODUCT(('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*(TODAY()-'Data'!F5:F1000))/SUMPRODUCT(('Data'!F5:F1000<>"")*('Data'!I5:I1000<>"Complete")*1)
```

---

## Bottom Strip: Summary Stats

### Headcount
Static values (update when headcount changes):
```
Employees:   (your count)
Contractors: (your count)
```

### Avg Projects Per Person
Replace `HEADCOUNT` with your team size:
```
=COUNTA('Data'!D5:D1000)/HEADCOUNT
```

### Revenue at Risk (requires Revenue column)
Replace `N` with your revenue column letter:
```
=SUMPRODUCT(('Data'!I5:I1000<>"Complete")*('Data'!N5:N1000))
```

---

## Setup Checklist

1. Create a new tab called "Dashboard"
2. Verify the data sheet tab name matches formulas
3. Confirm Column B area values
4. Confirm Column H owner names
5. Confirm Column I status text values
6. Choose helper column or SUMPRODUCT for aging
7. Build summary tables on Dashboard tab
8. Create 4 charts from summary tables
9. Format KPI tiles with large fonts and conditional coloring

## Conditional Formatting

### Risk Rate tile
- Green if < 10%
- Yellow if 10-20%
- Red if > 20%

### Status column (I)
Select I5:I1000 > Conditional Formatting > New Rule:
- Contains "\*OK\*" or "Complete" > Green fill
- Contains "\*Alert\*" > Yellow fill
- Contains "\*Issue\*" > Red fill
- "Not Started" > Gray fill
