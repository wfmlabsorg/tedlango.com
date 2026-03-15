---
title: "Sales Enablement Dashboard - Excel Formula Kit"
date: 2026-03-15
tags: ["excel", "dashboard", "tools"]
draft: false
---

Copy-paste Excel formulas for building a 4-quadrant executive dashboard from an Action Item Tracker. All formulas use flexible ranges (row 5 to 1000) so they work whether the data has 90 or 500 rows.

## Data Source Reference

- **Sheet name:** `Master AIT` (adjust to match your tracker tab name)
- **Data starts:** Row 5
- **Column map:**
  - A = Priority, B = Area, C = Type, D = Project Name
  - E = Action, F = Start Date, G = ETA to Complete
  - H = Owner, I = Status, J = (color), K = Last Update, L = Notes

---

## Quadrant 1: Portfolio Health (4 KPI Tiles)

### Total Projects
```
=COUNTA('Master AIT'!D5:D1000)
```
Counts non-blank Project Name cells.

### In Progress
```
=COUNTIF('Master AIT'!I5:I1000,"*In Progress*")
```
Catches "In Progress - OK", "In Progress - Alert", "In Progress - Issue" with wildcard.

### At Risk (Red/Yellow)
```
=COUNTIF('Master AIT'!I5:I1000,"*Alert*")+COUNTIF('Master AIT'!I5:I1000,"*Issue*")
```

### Risk Rate
```
=IF(COUNTA('Master AIT'!D5:D1000)=0,0,(COUNTIF('Master AIT'!I5:I1000,"*Alert*")+COUNTIF('Master AIT'!I5:I1000,"*Issue*"))/COUNTA('Master AIT'!D5:D1000))
```
Format cell as percentage.

### Optional KPIs
```
Complete:        =COUNTIF('Master AIT'!I5:I1000,"Complete")
Not Started:     =COUNTIF('Master AIT'!I5:I1000,"Not Started")
OK (on track):   =COUNTIF('Master AIT'!I5:I1000,"*OK*")
```

---

## Quadrant 2: Projects by Area (Stacked Bar Chart)

### Total by Area
Replace `AREA1`, `AREA2`, etc. with whatever values appear in your Column B:
```
Area 1:  =COUNTIF('Master AIT'!B5:B1000,"AREA1")
Area 2:  =COUNTIF('Master AIT'!B5:B1000,"AREA2")
Area 3:  =COUNTIF('Master AIT'!B5:B1000,"AREA3")
Area 4:  =COUNTIF('Master AIT'!B5:B1000,"AREA4")
Area 5:  =COUNTIF('Master AIT'!B5:B1000,"AREA5")
Area 6:  =COUNTIF('Master AIT'!B5:B1000,"AREA6")
```

Adjust match values to match exactly what appears in your Column B.

### Status breakdown per Area
Replace `AREA_VALUE` with the actual value from Column B:
```
Complete:    =COUNTIFS('Master AIT'!B5:B1000,"AREA_VALUE",'Master AIT'!I5:I1000,"Complete")
OK:          =COUNTIFS('Master AIT'!B5:B1000,"AREA_VALUE",'Master AIT'!I5:I1000,"*OK*")
Alert:       =COUNTIFS('Master AIT'!B5:B1000,"AREA_VALUE",'Master AIT'!I5:I1000,"*Alert*")
Issue:       =COUNTIFS('Master AIT'!B5:B1000,"AREA_VALUE",'Master AIT'!I5:I1000,"*Issue*")
Not Started: =COUNTIFS('Master AIT'!B5:B1000,"AREA_VALUE",'Master AIT'!I5:I1000,"Not Started")
```

Select the summary table, then Insert > Bar Chart > Stacked Bar.

---

## Quadrant 3: Status by Owner (Stacked Bar Chart)

### Total by Owner
Replace `Name1`, `Name2`, etc. with actual owner names from Column H:
```
Name1:  =COUNTIF('Master AIT'!H5:H1000,"Name1")
Name2:  =COUNTIF('Master AIT'!H5:H1000,"Name2")
Name3:  =COUNTIF('Master AIT'!H5:H1000,"Name3")
Name4:  =COUNTIF('Master AIT'!H5:H1000,"Name4")
```

### Dynamic unique owner list (Excel 365)
```
=SORT(UNIQUE(FILTER('Master AIT'!H5:H1000,'Master AIT'!H5:H1000<>"")))
```

### Status breakdown per Owner
Replace `OWNER_NAME` with the actual name:
```
Complete:    =COUNTIFS('Master AIT'!H5:H1000,"OWNER_NAME",'Master AIT'!I5:I1000,"Complete")
OK:          =COUNTIFS('Master AIT'!H5:H1000,"OWNER_NAME",'Master AIT'!I5:I1000,"*OK*")
Alert:       =COUNTIFS('Master AIT'!H5:H1000,"OWNER_NAME",'Master AIT'!I5:I1000,"*Alert*")
Issue:       =COUNTIFS('Master AIT'!H5:H1000,"OWNER_NAME",'Master AIT'!I5:I1000,"*Issue*")
Not Started: =COUNTIFS('Master AIT'!H5:H1000,"OWNER_NAME",'Master AIT'!I5:I1000,"Not Started")
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
0-7 days:   =COUNTIFS('Master AIT'!M5:M1000,">="&0,'Master AIT'!M5:M1000,"<="&7)
8-14 days:  =COUNTIFS('Master AIT'!M5:M1000,">="&8,'Master AIT'!M5:M1000,"<="&14)
15-30 days: =COUNTIFS('Master AIT'!M5:M1000,">="&15,'Master AIT'!M5:M1000,"<="&30)
31-60 days: =COUNTIFS('Master AIT'!M5:M1000,">="&31,'Master AIT'!M5:M1000,"<="&60)
60+ days:   =COUNTIFS('Master AIT'!M5:M1000,">"&60)
```

### Average Age
```
=AVERAGEIF('Master AIT'!M5:M1000,"<>"&"")
```

### Projects Over 60 Days
```
=COUNTIFS('Master AIT'!M5:M1000,">"&60)
```

### Without helper column (SUMPRODUCT approach)
```
0-7 days:   =SUMPRODUCT((('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*(TODAY()-'Master AIT'!F5:F1000>=0)*(TODAY()-'Master AIT'!F5:F1000<=7)))
8-14 days:  =SUMPRODUCT((('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*(TODAY()-'Master AIT'!F5:F1000>=8)*(TODAY()-'Master AIT'!F5:F1000<=14)))
15-30 days: =SUMPRODUCT((('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*(TODAY()-'Master AIT'!F5:F1000>=15)*(TODAY()-'Master AIT'!F5:F1000<=30)))
31-60 days: =SUMPRODUCT((('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*(TODAY()-'Master AIT'!F5:F1000>=31)*(TODAY()-'Master AIT'!F5:F1000<=60)))
60+ days:   =SUMPRODUCT((('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*(TODAY()-'Master AIT'!F5:F1000>60)))
```

### Average Age (no helper column)
```
=SUMPRODUCT(('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*(TODAY()-'Master AIT'!F5:F1000))/SUMPRODUCT(('Master AIT'!F5:F1000<>"")*('Master AIT'!I5:I1000<>"Complete")*1)
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
=COUNTA('Master AIT'!D5:D1000)/HEADCOUNT
```

### Revenue at Risk (requires Revenue column)
Replace `N` with your revenue column letter:
```
=SUMPRODUCT(('Master AIT'!I5:I1000<>"Complete")*('Master AIT'!N5:N1000))
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
